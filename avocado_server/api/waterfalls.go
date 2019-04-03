package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) WaterfallByUserID(ctx context.Context, waterfallID string) (*models.Waterfall, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateWaterfall(ctx context.Context, input models.NewWaterfall) (*models.Waterfall, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateWaterfall(ctx context.Context, input models.UpdateWaterfall) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteWaterfall(ctx context.Context, input models.DeleteWaterfall) (*models.Result, error) {
	panic("implement me")
}
