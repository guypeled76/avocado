package sqlconnector

import "github.com/jinzhu/gorm"

func Connect() (*gorm.DB, error) {

	db, err := connectCloudSql()
	if err != nil {
		return nil, err
	}

	if db != nil {
		return db, nil
	}

	return connectLocalSql()
}
