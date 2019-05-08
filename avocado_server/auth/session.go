package auth

import (
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gremlinsapps/avocado_server/session"
	"net/http"
	"time"
)

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

	return r.WithContext(session.Set(r.Context())), nil
}

func readSessionFromCookie(r *http.Request, secret []byte) (*session.Session, error) {
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

func deserializeSessionFromClaims(claims jwt.MapClaims) (*session.Session, error) {

	if err := claims.Valid(); err != nil {
		return nil, fmt.Errorf("claims are invalid:%s", err)
	}

	id := int(claims["id"].(float64))
	email := claims["email"].(string)
	return &session.Session{
		ID:    id,
		Email: email,
	}, nil
}

func writeSessionToCookie(s *session.Session, w http.ResponseWriter, secret []byte) {
	token, err := serializeSessionToToken(s, secret)
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

func serializeSessionToToken(s *session.Session, secret []byte) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, serializeSessionToClaims(s))
	if token == nil {
		return "", errors.New("could not create token from session")
	}
	return token.SignedString(secret)
}

func serializeSessionToClaims(s *session.Session) jwt.MapClaims {
	claims := make(jwt.MapClaims)
	claims["id"] = s.ID
	claims["email"] = s.Email
	return claims
}
