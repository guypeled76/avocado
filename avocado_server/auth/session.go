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

func clearSession(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    "",
		HttpOnly: true,
		Path:     "/",
	})
}

func getRequestWithSession(r *http.Request, secret []byte) (*http.Request, error) {
	session, err := ReadSession(r, secret)
	if err != nil {
		return nil, err
	}

	if session == nil {
		return nil, errors.New("could not find a valid session")
	}

	return r.WithContext(context.WithValue(r.Context(), sessionKey, session)), nil
}

func ReadSession(r *http.Request, secret []byte) (*Session, error) {
	cookie, _ := r.Cookie("session_token")

	if cookie != nil && cookie.Value != "" {

		tokenString := cookie.Value

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}

			return []byte(secret), nil
		})

		if claims, ok := token.Claims.(jwt.MapClaims); claims != nil && ok && token.Valid {

			id := uint(claims["id"].(float64))
			email := claims["email"].(string)
			session := &Session{
				ID:    id,
				Email: email,
			}
			return session, nil
		} else {
			return nil, err
		}
	}

	return nil, nil
}

func (s *Session) writeSession(w http.ResponseWriter, secret []byte) {
	token, err := s.toToken(secret)
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

func GetSession(ctx context.Context) (*Session, error) {
	session, success := ctx.Value(sessionKey).(*Session)
	if !success {
		return nil, errors.New("could not get session from context")
	}
	return session, nil
}

func (s *Session) toToken(secret []byte) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, s)
	if token == nil {
		return "", errors.New("could not create token from session")
	}
	return token.SignedString(secret)
}
