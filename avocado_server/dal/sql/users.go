package sql

import (
	"errors"
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

func (repo *UserRepository) GetOrCreateUserByEmail(user *dalmodel.User) (*dalmodel.User, error) {
	if user == nil {
		return nil, errors.New("user argument is required to get or create user")
	}

	current := &dalmodel.User{Email: user.Email}

	err := repo.conn.Find(current)
	if err != nil {
		if gorm.IsRecordNotFoundError(err) {
			err = repo.CreateUser(user)
			return user, err
		} else {
			return nil, err
		}
	} else {
		return current, nil
	}
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
