package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) VideosByHashTags(ctx context.Context, hashTags []string) ([]models.Video, error) {
	panic("implement me")
}

func (r *queryResolver) VideoByID(ctx context.Context, id string) (*models.Video, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateVideo(ctx context.Context, input models.NewVideo) (*models.Video, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateVideo(ctx context.Context, input models.UpdateVideo) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateVideoHashTags(ctx context.Context, input models.UpdateVideoHashTags) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteVideo(ctx context.Context, input models.DeleteVideo) (*models.Result, error) {
	panic("implement me")
}
