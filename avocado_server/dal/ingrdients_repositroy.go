package dal

import (
	"context"
	"firebase.google.com/go/db"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/firebase"
)

var ingredientsPath = firebase.IngredientsPath

type IngredientFirebaseRepository struct {
	Conn    *db.Client
	Context context.Context
}

func NewIngredientFirebaseRepository(db *db.Client, ctx context.Context) (*IngredientFirebaseRepository, error) {
	return &IngredientFirebaseRepository{
		Conn:    db,
		Context: ctx,
	}, nil
}

func (IngredientRepo IngredientFirebaseRepository) GetAll() ([]apimodel.Ingredient, error) {
	var results map[string]apimodel.Ingredient
	err := IngredientRepo.Conn.NewRef(ingredientsPath).Get(IngredientRepo.Context, &results)
	if err != nil {
		fmt.Printf("firebase error", err)
		return nil, err
	}

	var Ingredients []apimodel.Ingredient
	for _, r := range results {
		Ingredients = append(Ingredients, r)
	}
	return Ingredients, nil
}

func (IngredientRepo IngredientFirebaseRepository) Insert(newIngredient apimodel.Ingredient) error {
	err := IngredientRepo.Conn.NewRef(ingredientsPath).Child(newIngredient.ID).Set(IngredientRepo.Context, newIngredient)
	return err
}

func (IngredientRepo IngredientFirebaseRepository) GetID() (string, error) {
	ID, err := GetID(IngredientRepo.Conn, IngredientRepo.Context, ingredientsPath)
	return ID, err
}
