package sql

import (
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

func (repo *HashtagRepository) DeleteMeasurement(ID uint) error {
	measurement := dalmodel.Measurement{Model: gorm.Model{ID: ID}}
	err := repo.conn.Delete(&measurement)
	return err
}

func (repo *MeasurementRepository) UpdateMeasurement(id uint, data map[string]interface{}) error {
	measurement := dalmodel.Measurement{Model: gorm.Model{ID: id}}
	return repo.conn.Update(&measurement, data)
}

func (repo *MeasurementRepository) GetUserMeasurements(id uint, filter *apimodel.ResultsFilter) ([]dalmodel.Measurement, error) {
	user := dalmodel.User{Model: gorm.Model{ID: id}}
	measurements := make([]dalmodel.Measurement, 0)
	err := repo.conn.GetRelated(user, &measurements, filter, repo)
	return measurements, err
}

func (repo *MeasurementRepository) CreateMeasurement(input apimodel.NewMeasurement) (*dalmodel.Measurement, error) {
	measurement := dalmodel.Measurement{
		Name:        input.Name,
		Description: input.Description,
	}
	err := repo.conn.Create(&measurement)
	if err != nil {
		return nil, err
	}
	return &measurement, nil
}
