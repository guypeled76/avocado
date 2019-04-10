package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) ImagesByHashTags(ctx context.Context, hashTags []string) ([]apimodel.Image, error) {
	panic("implement me")
}

func (r *queryResolver) ImageByID(ctx context.Context, id string) (*apimodel.Image, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateImage(ctx context.Context, input apimodel.NewImage) (*apimodel.Image, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateImage(ctx context.Context, input apimodel.UpdateImage) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateImageHashTags(ctx context.Context, input apimodel.UpdateImageHashTags) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteImage(ctx context.Context, input apimodel.DeleteImage) (*apimodel.Result, error) {
	panic("implement me")
}
