package api

import (
	"context"
	"errors"
	"github.com/99designs/gqlgen/graphql"
	"github.com/gremlinsapps/avocado_server/session"
)

func resolveRequire(ctx context.Context, obj interface{}, next graphql.Resolver, permission string) (res interface{}, err error) {

	session, err := session.Get(ctx)
	if err != nil {
		return nil, err
	}

	if !session.HasPermission(permission) {
		return nil, errors.New("permission denied")
	}

	return next(ctx)
}
