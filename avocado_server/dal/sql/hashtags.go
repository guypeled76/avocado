package sql

import "github.com/gremlinsapps/avocado_server/dal/model"

func (conn *DBConnection) GetHashTags() ([]dalmodel.HashTag, error) {
	var hashtags []dalmodel.HashTag
	conn.db.Model(&dalmodel.HashTag{}).Find(&hashtags)
	return hashtags, nil
}

func (conn *DBConnection) CreateHashTag(name string) (*dalmodel.HashTag, error) {
	hashtag := dalmodel.HashTag{
		Name: name,
	}
	conn.db.Create(&hashtag)
	return &hashtag, nil
}
