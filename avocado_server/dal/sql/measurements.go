package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type MeasurementsRepository struct {
	conn *DBConnection
}

func CreateMeasurementsRepo(container DBConnectionContainer) (*MeasurementsRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &MeasurementsRepository{conn}, nil
}

func (repo *MeasurementsRepository) GetTextColumn() string {
	return "title"
}

func (repo *MeasurementsRepository) GetBaseName() string {
	return "measurement"
}

func (repo *MeasurementsRepository) GetUserMeasurements(id uint, filter *apimodel.ResultsFilter) ([]dalmodel.Measurement, error) {
	user := dalmodel.User{Model: gorm.Model{ID: id}}
	measurements := make([]dalmodel.Measurement, 0)
	err := repo.conn.GetRelated(user, &measurements, filter, repo)
	return measurements, err
}
