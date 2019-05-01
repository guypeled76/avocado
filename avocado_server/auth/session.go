package auth

import (
	"context"
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"net/http"
	"time"
)

var sessionKey = struct {
	value string
}{"sessionKey"}

type Session struct {
	ID    uint   `json:"id"`
	Email string `json:"email"`
}

func (s *Session) Valid() error {
	return nil
}

func GetSession(ctx context.Context) (*Session, error) {
	session, success := ctx.Value(sessionKey).(*Session)
	if !success {
		return nil, errors.New("could not get session from context")
	}
	return session, nil
}

func clearSessionCookie(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    "",
		HttpOnly: true,
		Path:     "/",
	})
}

func createRequestWithSession(r *http.Request, secret []byte) (*http.Request, error) {
	session, err := readSessionFromCookie(r, secret)
	if err != nil {
		return nil, err
	}

	if session == nil {
		return nil, errors.New("could not find a valid session")
	}

	return r.WithContext(context.WithValue(r.Context(), sessionKey, session)), nil
}

func readSessionFromCookie(r *http.Request, secret []byte) (*Session, error) {
	cookie, _ := r.Cookie("session_token")

	if cookie == nil || cookie.Value == "" {
		return nil, nil
	}

	tokenString := cookie.Value

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(secret), nil
	})

	if err != nil {
		return nil, fmt.Errorf("failed to get token from cookie:%s", err)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, errors.New("claims are not ok")
	}

	session, err := deserializeSessionFromClaims(claims)
	if err != nil {
		return nil, fmt.Errorf("failed to get session from cookie:%s", err)
	}

	return session, nil

}

func (s *Session) writeToCookie(w http.ResponseWriter, secret []byte) {
	token, err := s.serializeToToken(secret)
	if err != nil {
		panic(err)
	}

	expire := time.Now().Add(60 * time.Minute)

	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    token,
		Expires:  expire,
		HttpOnly: true,
		Path:     "/",
	})
}

func (s *Session) serializeToToken(secret []byte) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, s.serializeToClaims())
	if token == nil {
		return "", errors.New("could not create token from session")
	}
	return token.SignedString(secret)
}

func (s *Session) serializeToClaims() jwt.MapClaims {
	claims := make(jwt.MapClaims)
	claims["id"] = s.ID
	claims["email"] = s.Email
	return claims
}

func deserializeSessionFromClaims(claims jwt.MapClaims) (*Session, error) {

	if err := claims.Valid(); err != nil {
		return nil, fmt.Errorf("claims are invalid:%s", err)
	}

	id := uint(claims["id"].(float64))
	email := claims["email"].(string)
	return &Session{
		ID:    id,
		Email: email,
	}, nil
}
