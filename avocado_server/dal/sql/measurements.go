package sql

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type MeasurementRepository struct {
	conn *DBConnection
}

func CreateMeasurementRepo(container DBConnectionContainer) (*MeasurementRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &MeasurementRepository{conn}, nil
}

func (repo *MeasurementRepository) GetTextColumn() string {
	return "title"
}

func (repo *MeasurementRepository) GetBaseName() string {
	return "measurement"
}

func (repo *MeasurementRepository) GetMeasurement(id int) (*dalmodel.Measurement, error) {
	measurement := createFromMeasurementId(id)
	err := repo.conn.Get(&measurement)
	return measurement, err
}

func (repo *MeasurementRepository) DeleteMeasurement(id int) error {
	measurement := createFromMeasurementId(id)
	err := repo.conn.Delete(measurement)
	return err
}

func (repo *MeasurementRepository) UpdateMeasurement(ctx context.Context, id int, data map[string]interface{}) error {
	return repo.conn.Update(ctx, createFromMeasurementId(id), data)
}

func (repo *MeasurementRepository) GetUserMeasurements(id int, filter *apimodel.ResultsFilter) ([]dalmodel.Measurement, error) {
	measurements := make([]dalmodel.Measurement, 0)
	err := repo.conn.GetRelated(createFromUserId(id), &measurements, filter, repo)
	return measurements, err
}

func (repo *MeasurementRepository) GetMeasurements(filter *apimodel.ResultsFilter) ([]dalmodel.Measurement, error) {
	measurements := make([]dalmodel.Measurement, 0)
	err := repo.conn.Select(&measurements, filter, repo)
	return measurements, err
}

func (repo *MeasurementRepository) CreateMeasurement(ctx context.Context, input apimodel.NewMeasurement) (*dalmodel.Measurement, error) {
	measurement := dalmodel.Measurement{
		Name:        input.Name,
		Description: input.Description,
	}
	err := repo.conn.Create(ctx, &measurement)
	if err != nil {
		return nil, err
	}
	return &measurement, nil
}

func createFromMeasurementId(id int) *dalmodel.Measurement {
	return &dalmodel.Measurement{Model: gorm.Model{ID: uint(id)}}
}
