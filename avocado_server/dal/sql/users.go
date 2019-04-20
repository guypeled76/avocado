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

func (repo *UserRepository) CreateUser(user *dalmodel.User) error {
	err := repo.conn.Create(&user)
	if err != nil {
		return err
	}
	return nil
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
