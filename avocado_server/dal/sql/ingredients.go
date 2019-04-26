package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type IngredientRepository struct {
	conn *DBConnection
}

func CreateIngredientRepo(container DBConnectionContainer) (*IngredientRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &IngredientRepository{conn}, nil
}

func (repo *IngredientRepository) GetTextColumn() string {
	return "name"
}

func (repo *IngredientRepository) GetBaseName() string {
	return "ingredient"
}

func (repo *IngredientRepository) GetIngredients(filter *apimodel.ResultsFilter) ([]dalmodel.Ingredient, error) {
	ingredients := make([]dalmodel.Ingredient, 0)
	err := repo.conn.Select(&ingredients, filter, repo)
	return ingredients, err
}

func (repo *IngredientRepository) CreateIngredient(ingredient *dalmodel.Ingredient) error {
	err := repo.conn.Create(ingredient)
	if err != nil {
		return err
	}
	return nil
}

func (repo *IngredientRepository) DeleteIngredient(id int) error {
	err := repo.conn.Delete(createFromIngredientId(id))
	return err
}

func (repo *IngredientRepository) GetIngredient(id int) (*dalmodel.Ingredient, error) {
	user := createFromIngredientId(id)
	err := repo.conn.Get(user)
	return user, err
}

func (repo *IngredientRepository) UpdateUser(id int, data map[string]interface{}) error {
	return repo.conn.Update(createFromIngredientId(id), data)
}

func createFromIngredientId(id int) *dalmodel.Ingredient {
	return &dalmodel.Ingredient{Model: gorm.Model{ID: uint(id)}}
}
