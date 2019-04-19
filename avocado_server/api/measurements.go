package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) Measurements(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Measurement, error) {
	panic("implement me")
}

func (r *queryResolver) MeasurementByID(ctx context.Context, id string) (*apimodel.Measurement, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateMeasurement(ctx context.Context, input apimodel.NewMeasurement) (*apimodel.Measurement, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateMeasurement(ctx context.Context, input apimodel.UpdateMeasurement) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteMeasurement(ctx context.Context, id string) (*apimodel.Result, error) {
	panic("implement me")
}

func (measurementResolver) Chat(ctx context.Context, obj *apimodel.Measurement) (*apimodel.Chat, error) {
	panic("implement me")
}

func (measurementResolver) Hashtags(ctx context.Context, obj *apimodel.Measurement) ([]apimodel.Hashtag, error) {
	panic("implement me")
}

func (measurementResolver) Results(ctx context.Context, obj *apimodel.Measurement) ([]apimodel.MeasurementResult, error) {
	panic("implement me")
}

func (r *userResolver) Measurements(ctx context.Context, obj *apimodel.User) ([]apimodel.Measurement, error) {
	panic("implement me")
}
