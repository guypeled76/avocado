package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) WaterfallByUserID(ctx context.Context, waterfallID string) (*apimodel.Waterfall, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateWaterfall(ctx context.Context, input apimodel.NewWaterfall) (*apimodel.Waterfall, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateWaterfall(ctx context.Context, input apimodel.UpdateWaterfall) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteWaterfall(ctx context.Context, input apimodel.DeleteWaterfall) (*apimodel.Result, error) {
	panic("implement me")
}
