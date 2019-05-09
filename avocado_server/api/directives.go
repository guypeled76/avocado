package api

import (
	"context"
	"github.com/99designs/gqlgen/graphql"
)

func resolveRequire(ctx context.Context, obj interface{}, next graphql.Resolver, permission string) (res interface{}, err error) {

	if permission == "manage" {
		//return nil, errors.New("test permission")
	}

	return next(ctx)
}
