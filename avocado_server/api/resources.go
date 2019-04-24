package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *mutationResolver) CreateResource(ctx context.Context, input apimodel.NewResource) (*apimodel.Resource, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateResource(ctx context.Context, input apimodel.UpdateResource) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteResource(ctx context.Context, input apimodel.DeleteResource) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *queryResolver) Resources(ctx context.Context, filter apimodel.ResultsFilter) ([]apimodel.Resource, error) {
	panic("implement me")
}

func (r *queryResolver) ResourceByID(ctx context.Context, id string) (*apimodel.Resource, error) {
	panic("implement me")
}

func (r *resourceResolver) Chat(ctx context.Context, obj *apimodel.Resource) (*apimodel.Chat, error) {
	panic("implement me")
}
