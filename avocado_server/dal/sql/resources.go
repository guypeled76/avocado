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

func (repo *ResourceRepository) GetResource(resourceID uint) (*dalmodel.Resource, error) {
	resource := dalmodel.Resource{Model: gorm.Model{ID: resourceID}}
	err := repo.conn.Get(&resource)
	return &resource, err
}

func (repo *ResourceRepository) GetResources(filter *apimodel.ResultsFilter) ([]dalmodel.Resource, error) {
	resources := make([]dalmodel.Resource, 0)
	err := repo.conn.Select(&resources, filter, repo)
	return resources, err
}

func (repo *ResourceRepository) DeleteResource(resourceId uint) error {
	hashtag := dalmodel.Resource{Model: gorm.Model{ID: resourceId}}
	err := repo.conn.Delete(&hashtag)
	return err
}

func (repo *ResourceRepository) CreateResource(resource *dalmodel.Resource) error {
	err := repo.conn.Create(&resource)
	if err != nil {
		return err
	}
	return nil
}

func (repo *ResourceRepository) UpdateResource(resourceId uint, data map[string]interface{}) error {
	resource := dalmodel.Resource{Model: gorm.Model{ID: resourceId}}
	return repo.conn.Update(&resource, data)
}
