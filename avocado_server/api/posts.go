package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) PostsByUserID(ctx context.Context, userID string) ([]apimodel.Post, error) {
	panic("implement me")
}

func (r *mutationResolver) CreatePost(ctx context.Context, input apimodel.NewPost) (*apimodel.Post, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdatePost(ctx context.Context, input apimodel.UpdatePost) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeletePost(ctx context.Context, input apimodel.DeletePost) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}
