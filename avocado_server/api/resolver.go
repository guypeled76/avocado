//go:generate gorunpkg github.com/99designs/gqlgen

package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/graph"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/firebase"
)

type Resolver struct {
	db *firebase.DBConnection
}

func (r *Resolver) Mutation() graph.MutationResolver {
	return &mutationResolver{r}
}

func (r *Resolver) Query() graph.QueryResolver {
	return &queryResolver{r}
}

// Mutations
type mutationResolver struct{ *Resolver }

// Queries
type queryResolver struct{ *Resolver }

func (r *mutationResolver) Logon(ctx context.Context) (*apimodel.Result, error) {
	panic("implement me")
}

func NewRootResolvers() graph.Config {
	resolver := Resolver{}
	resolver.db = firebase.Connect()

	c := graph.Config{
		Resolvers: &resolver,
	}
	return c
}
