package sql

type RecipeRepository struct {
	conn *DBConnection
}

func (repo *RecipeRepository) GetTextColumn() string {
	return "title"
}

func (repo *RecipeRepository) GetBaseName() string {
	return "recipe"
}
