package session

import (
	"context"
	"errors"
)

var sessionKey = struct {
	value string
}{"sessionKey"}

type Session struct {
	ID    int    `json:"id"`
	Email string `json:"email"`
}

func (s *Session) Set(ctx context.Context) context.Context {
	return context.WithValue(ctx, sessionKey, s)
}

func (s *Session) HasPermission(permission string) bool {

	return false
}

func (s *Session) Valid() error {
	if s == nil {
		return errors.New("session is not valid")
	}
	if s.ID == 0 {
		return errors.New("session with invalid user id")
	} else {
		return nil
	}
}

func GetUserId(ctx context.Context) (int, error) {
	session, err := Get(ctx)
	if err != nil {
		return 0, err
	}
	return session.ID, nil
}

func Get(ctx context.Context) (*Session, error) {
	session, success := ctx.Value(sessionKey).(*Session)
	if !success {
		return nil, errors.New("could not get session from context")
	}
	return session, nil
}
