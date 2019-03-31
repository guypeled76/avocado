package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *mutationResolver) CreatePost(ctx context.Context, input models.NewPost) (*models.Post, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdatePost(ctx context.Context, input models.UpdatePost) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeletePost(ctx context.Context, input models.DeletePost) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}
