package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type ResourceRepository struct {
	conn *DBConnection
}

func (repo *ResourceRepository) GetTextColumn() string {
	return "name"
}

func (repo *ResourceRepository) GetBaseName() string {
	return "resource"
}

func CreateResourceRepo(container DBConnectionContainer) (*ResourceRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &ResourceRepository{conn}, nil
}

func (repo *ResourceRepository) GetResource(id int) (*dalmodel.Resource, error) {
	resource := createFromResourceId(id)
	err := repo.conn.Get(resource)
	return resource, err
}

func (repo *ResourceRepository) GetResources(filter *apimodel.ResultsFilter) ([]dalmodel.Resource, error) {
	resources := make([]dalmodel.Resource, 0)
	err := repo.conn.Select(&resources, filter, repo)
	return resources, err
}

func (repo *ResourceRepository) DeleteResource(id int) error {
	return repo.conn.Delete(createFromResourceId(id))
}

func (repo *ResourceRepository) CreateResource(resource *dalmodel.Resource) error {
	return repo.conn.Create(&resource)
}

func (repo *ResourceRepository) UpdateResource(id int, data map[string]interface{}) error {
	return repo.conn.Update(createFromResourceId(id), data)
}

func createFromResourceId(id int) *dalmodel.Resource {
	return &dalmodel.Resource{Model: gorm.Model{ID: uint(id)}}
}
