package dalmodel

import "github.com/jinzhu/gorm"

type Ingredient struct {
	gorm.Model
	Name               string
	Description        string
	Hashtags           []Hashtag `gorm:"many2many:ingredient_hashtags;"`
	Recipe             Recipe
	Ingredients        []IngredientPortion `gorm:"many2many:ingredient_ingredient_portions;"`
	Calories           float32
	TotalFat           float32
	SaturatedFat       float32
	MonounsaturatedFat float32
	TransFat           float32
	Cholesterol        float32
	Sodium             float32
	Potassium          float32
	TotalCarbohydrate  float32
	DietaryFiber       float32
	Sugar              float32
	Protein            float32
}

type IngredientPortion struct {
	gorm.Model
	Kind         IngredientPortionKind
	Ingredient   Ingredient `gorm:"foreignkey:IngredientID;association_foreignkey:ID"`
	IngredientID int
	Amount       float32
}

type IngredientPortionKind struct {
	gorm.Model
	Name string
}

type Recipe struct {
	gorm.Model
	Title       string
	Description string
}
