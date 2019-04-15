package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
)

func (conn *DBConnection) GetHashTags(filter *apimodel.ResultsFilter) ([]dalmodel.HashTag, error) {
	hashtags := make([]dalmodel.HashTag, 0)
	err := conn.Select(&hashtags, filter)
	return hashtags, err
}

func (conn *DBConnection) CreateHashTag(name string) (*dalmodel.HashTag, error) {
	hashtag := dalmodel.HashTag{
		Name: name,
	}
	conn.db.Create(&hashtag)
	return &hashtag, nil
}
