package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) PostsByUserID(ctx context.Context, userID int) ([]apimodel.Post, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) CreatePost(ctx context.Context, input apimodel.NewPost) (*apimodel.Post, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdatePost(ctx context.Context, input apimodel.UpdatePost) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeletePost(ctx context.Context, input apimodel.DeletePost) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}
