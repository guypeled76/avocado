package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) Measurements(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Measurement, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return []apimodel.Measurement{}, err
	}

	measurements, err := repo.GetMeasurements(filter)
	if err != nil {
		return []apimodel.Measurement{}, err
	}

	var results []apimodel.Measurement
	for _, measurement := range measurements {
		results = append(results, *convertMeasurement(&measurement))
	}
	return results, nil
}

func (r *queryResolver) MeasurementByID(ctx context.Context, id int) (*apimodel.Measurement, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return nil, err
	}

	measurement, err := repo.GetMeasurement(id)
	if err != nil {
		return nil, err
	}

	return convertMeasurement(measurement), nil
}

func (r *mutationResolver) CreateMeasurement(ctx context.Context, input apimodel.NewMeasurement) (*apimodel.Measurement, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return nil, err
	}

	hashtag, err := repo.CreateMeasurement(input)
	if err != nil {
		return nil, err
	}

	return convertMeasurement(hashtag), nil
}

func (r *mutationResolver) UpdateMeasurement(ctx context.Context, input apimodel.UpdateMeasurement) (*apimodel.Result, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return apimodel.CreateFailureResult(err)
	}

	uid := input.ID

	data := make(map[string]interface{})

	if input.Name != nil {
		data["Name"] = *input.Name
	}

	if input.Description != nil {
		data["Description"] = *input.Description
	}

	if len(data) > 0 {
		err = repo.UpdateMeasurement(uid, data)
		if err != nil {
			return apimodel.CreateFailureResult(err)
		}
	}

	if input.Hashtags != nil {
		hashtagRepo, err := sql.CreateHashtagRepo(r)
		if err != nil {
			return nil, err
		}

		err = hashtagRepo.UpdateMeasurementHashtags(uid, input.Hashtags)
		if err != nil {
			return apimodel.CreateFailureResult(err)
		}
	}

	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteMeasurement(ctx context.Context, id int) (*apimodel.Result, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return apimodel.CreateFailureResult(err)
	}

	err = repo.DeleteMeasurement(id)
	if err != nil {
		return apimodel.CreateFailureResult(err)
	}

	return apimodel.CreateSuccessResult()
}

func (measurementResolver) Chat(ctx context.Context, obj *apimodel.Measurement) (*apimodel.Chat, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (measurementResolver) Hashtags(ctx context.Context, obj *apimodel.Measurement) ([]apimodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (measurementResolver) Results(ctx context.Context, obj *apimodel.Measurement) ([]apimodel.MeasurementResult, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *userResolver) Measurements(ctx context.Context, user *apimodel.User, filter *apimodel.ResultsFilter) ([]apimodel.Measurement, error) {
	repo, err := sql.CreateMeasurementRepo(r)
	if err != nil {
		return nil, err
	}

	measurements, err := repo.GetUserMeasurements(user.ID, filter)
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
		ID:          int(measurement.ID),
		Name:        measurement.Name,
		Description: measurement.Description,
		CreatedAt:   measurement.CreatedAt,
		UpdatedAt:   measurement.UpdatedAt,
		DeletedAt:   measurement.DeletedAt,
	}
}
