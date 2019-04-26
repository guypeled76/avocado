package sql

type FoodRepository struct {
	conn *DBConnection
}

func CreateFoodRepo(container DBConnectionContainer) (*FoodRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &FoodRepository{conn}, nil
}

func (repo *FoodRepository) GetTextColumn() string {
	return "title"
}

func (repo *FoodRepository) GetBaseName() string {
	return "measurement"
}
