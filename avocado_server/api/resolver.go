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

func (r *mutationResolver) CreateWaterfall(ctx context.Context, input models.NewWaterfall) (*models.Waterfall, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateWaterfall(ctx context.Context, input models.UpdateWaterfall) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteWaterfall(ctx context.Context, input models.DeleteWaterfall) (*models.Result, error) {
	panic("implement me")
}

// Queries
type queryResolver struct{ *Resolver }

func (r *queryResolver) CurrentUser(ctx context.Context) (*models.User, error) {
	panic("implement me")
}

func (r *queryResolver) ChatsByUserID(ctx context.Context, userID string) ([]models.Chat, error) {
	panic("implement me")
}

func (r *queryResolver) ChatByID(ctx context.Context, chatID string) (*models.Chat, error) {
	panic("implement me")
}

func (r *queryResolver) ClinicByID(ctx context.Context, clinicID string) (*models.Clinic, error) {
	panic("implement me")
}

func (r *queryResolver) NotificationsByUserID(ctx context.Context, userID string) ([]models.Notification, error) {
	panic("implement me")
}

func (r *queryResolver) PostsByUserID(ctx context.Context, userID string) ([]models.Post, error) {
	panic("implement me")
}

func (r *queryResolver) UserByID(ctx context.Context, userID string) (*models.User, error) {
	panic("implement me")
}

func (r *queryResolver) WaterfallByUserID(ctx context.Context, waterfallID string) (*models.Waterfall, error) {
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
