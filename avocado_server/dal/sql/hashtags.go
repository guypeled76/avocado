package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type HashtagRepository struct {
	conn *DBConnection
}

func CreateHashtagRepo(container DBConnectionContainer) (*HashtagRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &HashtagRepository{conn}, nil
}

func (repo *HashtagRepository) GetTextColumn() string {
	return "name"
}

func (repo *HashtagRepository) GetBaseName() string {
	return "hashtag"
}

func (repo *HashtagRepository) GetHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	hashtags := make([]dalmodel.Hashtag, 0)
	err := repo.conn.Select(&hashtags, filter, repo)
	return hashtags, err
}

func (repo *HashtagRepository) CreateHashtag(name string) (*dalmodel.Hashtag, error) {
	hashtag := dalmodel.Hashtag{
		Name: name,
	}
	err := repo.conn.Create(&hashtag)
	if err != nil {
		return nil, err
	}
	return &hashtag, nil
}

func (repo *HashtagRepository) DeleteHashtag(ID uint) error {
	hashtag := dalmodel.Hashtag{Model: gorm.Model{ID: ID}}
	err := repo.conn.Delete(&hashtag)
	return err
}

func (repo *HashtagRepository) GetUserHashtags(ID uint) ([]dalmodel.Hashtag, error) {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	hashTags := make([]dalmodel.Hashtag, 0)
	err := repo.conn.GetAssociations(user, "Hashtags", &hashTags)
	return hashTags, err
}

func (repo *HashtagRepository) UpdateUserHashtags(ID uint, hashtags []dalmodel.Hashtag) error {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	return repo.conn.UpdateAssociations(&user, "Hashtags", hashtags)
}

func (repo *HashtagRepository) UpdateMeasurementHashtags(ID uint, hashtags []dalmodel.Hashtag) error {
	measurement := dalmodel.Measurement{Model: gorm.Model{ID: ID}}
	return repo.conn.UpdateAssociations(&measurement, "Measurements", hashtags)
}

func (repo *HashtagRepository) GetIngredientHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}

func (repo *HashtagRepository) GetMealHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}

func (repo *HashtagRepository) GetVideoHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}

func (repo *HashtagRepository) GetPhotoHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}

func (repo *HashtagRepository) GetPostHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}

func (repo *HashtagRepository) GetRecipeHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	panic("implement me")
}
