//go:generate gorunpkg github.com/99designs/gqlgen

package api

import (
	"context"
	"errors"
	"github.com/gremlinsapps/avocado_server/api/graph"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/firebase"
	"github.com/gremlinsapps/avocado_server/dal/sql"
)

type Resolver struct {
	firebase *firebase.FBConnection
	database *sql.DBConnection
}

func (r *Resolver) Mutation() graph.MutationResolver {
	return &mutationResolver{r}
}

func (r *Resolver) Query() graph.QueryResolver {
	return &queryResolver{r}
}

// Mutations
type mutationResolver struct{ *Resolver }

func (r *mutationResolver) GetDBConnection() (*sql.DBConnection, error) {
	if r.database == nil {
		return nil, errors.New("DB connection was not initialized")
	}
	return r.database, nil
}

// Queries
type queryResolver struct{ *Resolver }

func (r *mutationResolver) Logon(ctx context.Context) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *queryResolver) GetDBConnection() (*sql.DBConnection, error) {
	if r.database == nil {
		return nil, errors.New("DB connection was not initialized")
	}
	return r.database, nil
}

func NewRootResolvers() graph.Config {
	resolver := Resolver{}
	resolver.firebase = firebase.Connect()
	resolver.database = sql.Connect()
	c := graph.Config{
		Resolvers: &resolver,
	}
	return c
}
