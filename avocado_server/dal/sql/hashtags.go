package sql

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/helpers"
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

func (repo *HashtagRepository) CreateHashtag(ctx context.Context, name string) (*dalmodel.Hashtag, error) {

	hashtag := dalmodel.Hashtag{
		Name: name,
	}

	err := repo.conn.Create(ctx, &hashtag)
	if err != nil {
		return nil, err
	}
	return &hashtag, nil
}

func (repo *HashtagRepository) DeleteHashtag(ID int) error {
	err := repo.conn.Delete(createFromHashtagId(ID))
	return err
}

func (repo *HashtagRepository) GetUserHashtags(uid int) ([]dalmodel.Hashtag, error) {
	hashTags := make([]dalmodel.Hashtag, 0)
	err := repo.conn.GetAssociations(createFromUserId(uid), "Hashtags", &hashTags)
	return hashTags, err
}

func (repo *HashtagRepository) GetPostHashtags(id int) ([]dalmodel.Hashtag, error) {
	hashTags := make([]dalmodel.Hashtag, 0)
	err := repo.conn.GetAssociations(createFromPostId(id), "Hashtags", &hashTags)
	return hashTags, err
}

func (repo *HashtagRepository) UpdateUserHashtags(id int, hashtagIds []int) error {
	return repo.conn.UpdateAssociations(createFromUserId(id), "Hashtags", createFromHashtagIds(hashtagIds))
}

func (repo *HashtagRepository) UpdateMeasurementHashtags(id int, hashtagIds []int) error {
	return repo.conn.UpdateAssociations(createFromMeasurementId(id), "Measurements", createFromHashtagIds(hashtagIds))
}

func (repo *HashtagRepository) UpdateResourceHashtags(resourceId int, hashtagIds []int) error {
	return repo.conn.UpdateAssociations(createFromResourceId(resourceId), "Hashtags", createFromHashtagIds(hashtagIds))
}

func (repo *HashtagRepository) GetIngredientHashtags(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (repo *HashtagRepository) GetHashtagsRelatedToMeals(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (repo *HashtagRepository) GetHashtagsRelatedToVideos(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (repo *HashtagRepository) GetHashtagsRelatedToPhotos(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (repo *HashtagRepository) GetHashtagsRelatedToPosts(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (repo *HashtagRepository) GetHashtagsRelatedToRecipes(filter *apimodel.ResultsFilter) ([]dalmodel.Hashtag, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func createFromHashtagIds(hashtagIds []int) []dalmodel.Hashtag {
	hashtags := make([]dalmodel.Hashtag, 0)
	for _, hashtagId := range hashtagIds {
		hashtags = append(hashtags, createFromHashtagId(hashtagId))
	}
	return hashtags
}

func createFromHashtagId(hashtagId int) dalmodel.Hashtag {
	return dalmodel.Hashtag{Model: gorm.Model{ID: uint(hashtagId)}}
}
