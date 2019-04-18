package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type UserRepository struct {
	conn *DBConnection
}

func CreateUserRepo(container DBConnectionContainer) (*UserRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &UserRepository{conn}, nil
}

func (repo *UserRepository) GetTextColumn() string {
	return "name"
}

func (repo *UserRepository) GetBaseName() string {
	return "user"
}

func (repo *UserRepository) GetUsers(filter *apimodel.ResultsFilter) ([]dalmodel.User, error) {
	hashtags := make([]dalmodel.User, 0)
	err := repo.conn.Select(&hashtags, filter, repo)
	return hashtags, err
}

func (repo *UserRepository) CreateUser(input apimodel.NewUser) (*dalmodel.User, error) {
	hashtag := dalmodel.User{
		Name:        input.Name,
		DisplayName: input.DisplayName,
		Email:       input.Email,
	}
	err := repo.conn.Create(&hashtag)
	if err != nil {
		return nil, err
	}
	return &hashtag, nil
}

func (repo *UserRepository) DeleteUser(ID uint) error {
	hashtag := dalmodel.User{Model: gorm.Model{ID: ID}}
	err := repo.conn.Delete(&hashtag)
	return err
}

func (repo *UserRepository) GetUser(ID uint) (*dalmodel.User, error) {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	err := repo.conn.Get(&user)
	return &user, err
}

func (repo *UserRepository) UpdateUser(ID uint, data map[string]interface{}) error {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	return repo.conn.Update(&user, data)
}

func (repo *UserRepository) UpdateHashtags(ID uint, hashtags []dalmodel.Hashtag) error {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	return repo.conn.UpdateAssociations(&user, "Hashtags", hashtags)
}

func (repo *UserRepository) GetUserHashtags(ID uint) ([]dalmodel.Hashtag, error) {
	user := dalmodel.User{Model: gorm.Model{ID: ID}}
	hashTags := make([]dalmodel.Hashtag, 0)
	err := repo.conn.GetAssociations(user, "Hashtags", &hashTags)
	return hashTags, err
}
