//go:generate gorunpkg github.com/99designs/gqlgen

package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/dal/firebase"
	"github.com/gremlinsapps/avocado_server/graph"
	"github.com/gremlinsapps/avocado_server/models"
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

func (r *mutationResolver) Logon(ctx context.Context) (*models.Result, error) {
	panic("implement me")
}

// Queries
type queryResolver struct{ *Resolver }

func NewRootResolvers() graph.Config {
	resolver := Resolver{}
	resolver.db = firebase.Connect()

	c := graph.Config{
		Resolvers: &resolver,
	}
	return c
}
