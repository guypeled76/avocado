package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
)

func (conn *DBConnection) GetHashTags(filter *apimodel.ResultsFilter) ([]dalmodel.HashTag, error) {
	var hashtags []dalmodel.HashTag
	db := conn.db.Model(&hashtags)
	db, err := Filter(db, filter)
	if err != nil {
		return hashtags, err
	}
	db.Find(&hashtags)
	return hashtags, nil
}

func (conn *DBConnection) CreateHashTag(name string) (*dalmodel.HashTag, error) {
	hashtag := dalmodel.HashTag{
		Name: name,
	}
	conn.db.Create(&hashtag)
	return &hashtag, nil
}
