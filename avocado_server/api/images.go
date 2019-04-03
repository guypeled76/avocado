package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) ImagesByHashTags(ctx context.Context, hashTags []string) ([]models.Image, error) {
	panic("implement me")
}

func (r *queryResolver) ImageByID(ctx context.Context, id string) (*models.Image, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateImage(ctx context.Context, input models.NewImage) (*models.Image, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateImage(ctx context.Context, input models.UpdateImage) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateImageHashTags(ctx context.Context, input models.UpdateImageHashTags) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteImage(ctx context.Context, input models.DeleteImage) (*models.Result, error) {
	panic("implement me")
}
