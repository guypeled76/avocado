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

func (r *Resolver) User() graph.UserResolver {
	return &userResolver{r}
}

func (r *Resolver) Post() graph.PostResolver {
	return &postResolver{r}
}

func (r *Resolver) Measurement() graph.MeasurementResolver {
	return &measurementResolver{r}
}

func (r *Resolver) Chat() graph.ChatResolver {
	return &chatResolver{r}
}

func (r *Resolver) Resource() graph.ResourceResolver {
	return &resourceResolver{r}
}

func (r *Resolver) Reply() graph.ReplyResolver {
	return &replyResolver{r}
}

func (r *Resolver) Message() graph.MessageResolver {
	return &messageResolver{r}
}

func (r *Resolver) Hashtag() graph.HashtagResolver {
	return &hashtagResolver{r}
}

// Mutations
type mutationResolver struct{ *Resolver }

// Queries
type queryResolver struct{ *Resolver }

// Users
type userResolver struct{ *Resolver }

// Posts
type postResolver struct{ *Resolver }

// Measurements
type measurementResolver struct{ *Resolver }

// Chat
type chatResolver struct{ *Resolver }

// Resource
type resourceResolver struct{ *Resolver }

// Reply
type replyResolver struct{ *Resolver }

// Message
type messageResolver struct{ *Resolver }

// Hashtag
type hashtagResolver struct{ *Resolver }

func getDB(db *sql.DBConnection) (*sql.DBConnection, error) {
	if db == nil {
		return nil, errors.New("DB connection was not initialized")
	}
	return db, nil
}

func (r *resourceResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *replyResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *messageResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *hashtagResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *mutationResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *postResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *userResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *chatResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *queryResolver) GetDBConnection() (*sql.DBConnection, error) {
	return getDB(r.database)
}

func (r *mutationResolver) Logon(ctx context.Context) (*apimodel.Result, error) {
	panic("implement me")
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
