package sql

type IngredientRepository struct {
	conn *DBConnection
}

func (repo *IngredientRepository) GetTextColumn() string {
	return "name"
}

func (repo *IngredientRepository) GetBaseName() string {
	return "ingredient"
}
