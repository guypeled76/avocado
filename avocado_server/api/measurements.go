package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
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

func (r *userResolver) Measurements(ctx context.Context, obj *apimodel.User, filter *apimodel.ResultsFilter) ([]apimodel.Measurement, error) {
	repo, err := sql.CreateMeasurementsRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(obj.ID)
	if err != nil {
		return nil, err
	}

	measurements, err := repo.GetUserMeasurements(uid, filter)
	if err != nil {
		return nil, err
	}

	return convertMeasurements(measurements), nil
}

func convertMeasurements(measurements []dalmodel.Measurement) []apimodel.Measurement {
	result := make([]apimodel.Measurement, 0)

	for _, measurement := range measurements {
		result = append(result, *convertMeasurement(&measurement))
	}

	return result
}

func convertMeasurement(measurement *dalmodel.Measurement) *apimodel.Measurement {
	return &apimodel.Measurement{
		ID:        fmt.Sprint(measurement.ID),
		Name:      measurement.Title,
		CreatedAt: measurement.CreatedAt,
		UpdatedAt: measurement.UpdatedAt,
		DeletedAt: measurement.DeletedAt,
	}
}
