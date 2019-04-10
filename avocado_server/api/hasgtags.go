package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *mutationResolver) CreateHashTag(ctx context.Context, name string) (*apimodel.HashTag, error) {
	panic("implement me")
}

func (r *queryResolver) HashTags(ctx context.Context) (*apimodel.HashTag, error) {
	panic("implement me")
}
