package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type HashTagRepository struct {
	conn *DBConnection
}

func CreateHashTagRepo(container DBConnectionContainer) (*HashTagRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &HashTagRepository{conn}, nil
}

func (repo *HashTagRepository) GetTextColumn() string {
	return "name"
}

func (repo *HashTagRepository) GetHashTags(filter *apimodel.ResultsFilter) ([]dalmodel.HashTag, error) {
	hashtags := make([]dalmodel.HashTag, 0)
	err := repo.conn.Select(&hashtags, filter, repo)
	return hashtags, err
}

func (repo *HashTagRepository) CreateHashTag(name string) (*dalmodel.HashTag, error) {
	hashtag := dalmodel.HashTag{
		Name: name,
	}
	err := repo.conn.Create(&hashtag)
	if err != nil {
		return nil, err
	}
	return &hashtag, nil
}

func (repo *HashTagRepository) DeleteHashTag(ID uint) error {
	hashtag := dalmodel.HashTag{Model: gorm.Model{ID: ID}}
	err := repo.conn.Delete(&hashtag)
	return err
}
