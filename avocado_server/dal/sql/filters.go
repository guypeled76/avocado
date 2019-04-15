package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/jinzhu/gorm"
)

func Filter(db *gorm.DB, filter *apimodel.ResultsFilter) (*gorm.DB, error) {

	if filter == nil {
		return db, nil
	}

	return db, nil
}
