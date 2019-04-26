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
	users := make([]dalmodel.User, 0)
	err := repo.conn.Select(&users, filter, repo)
	return users, err
}

func (repo *UserRepository) CreateUser(user *dalmodel.User) error {
	err := repo.conn.Create(user)
	if err != nil {
		return err
	}
	return nil
}

func (repo *UserRepository) DeleteUser(id int) error {
	err := repo.conn.Delete(createFromUserId(id))
	return err
}

func (repo *UserRepository) GetUser(id int) (*dalmodel.User, error) {
	user := createFromUserId(id)
	err := repo.conn.Get(user)
	return user, err
}

func (repo *UserRepository) UpdateUser(ID int, data map[string]interface{}) error {
	return repo.conn.Update(createFromUserId(ID), data)
}

func createFromUserId(uid int) *dalmodel.User {
	return &dalmodel.User{Model: gorm.Model{ID: uint(uid)}}
}
