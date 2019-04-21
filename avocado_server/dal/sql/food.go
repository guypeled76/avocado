package sql

type FoodRepository struct {
	conn *DBConnection
}

func (repo *FoodRepository) GetTextColumn() string {
	return "title"
}

func (repo *FoodRepository) GetBaseName() string {
	return "measurement"
}
