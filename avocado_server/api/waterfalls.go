package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) WaterfallByUserID(ctx context.Context, waterfallID int) (*apimodel.Waterfall, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) CreateWaterfall(ctx context.Context, input apimodel.NewWaterfall) (*apimodel.Waterfall, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdateWaterfall(ctx context.Context, input apimodel.UpdateWaterfall) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) DeleteWaterfall(ctx context.Context, input apimodel.DeleteWaterfall) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}
