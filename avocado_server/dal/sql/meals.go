package sql

type MealRepository struct {
	conn *DBConnection
}

func (repo *MealRepository) GetTextColumn() string {
	return "name"
}

func (repo *MealRepository) GetBaseName() string {
	return "meal"
}
