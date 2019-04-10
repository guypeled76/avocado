package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal"
	"time"
)

func (r *queryResolver) Ingredients(ctx context.Context) ([]apimodel.Ingredient, error) {
	var allIngredients []apimodel.Ingredient

	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)

	if allIngredients, err = ingredientRepository.GetAll(); err != nil {
		fmt.Printf("firebase error", err)
	}

	return allIngredients, nil
}

func (r *mutationResolver) CreateIngredient(ctx context.Context, input apimodel.NewIngredient) (*apimodel.Ingredient, error) {
	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)
	if err != nil {
		fmt.Print("firebase error: ", err)
		return &apimodel.Ingredient{}, err
	}

	var ingredientID string
	if ingredientID, err = ingredientRepository.GetID(); err != nil {
		fmt.Print("ingredientRepository GetID error: ", err)
		return &apimodel.Ingredient{}, err
	}

	ingredient := apimodel.Ingredient{
		ID:        ingredientID,
		Name:      input.Name,
		CreatedAt: time.Now().UTC(),
	}

	// Set the values in the DB
	if err = ingredientRepository.Insert(ingredient); err != nil {
		fmt.Print("firebase error: ", err)
		return &apimodel.Ingredient{}, err
	}

	return &ingredient, nil
}

func (r *mutationResolver) UpdateIngredient(ctx context.Context, input apimodel.UpdateIngredient) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeleteIngredient(ctx context.Context, input apimodel.DeleteIngredient) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}
