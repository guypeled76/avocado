package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/dal"
	"github.com/gremlinsapps/avocado_server/models"
	"time"
)

func (r *queryResolver) Ingredients(ctx context.Context) ([]models.Ingredient, error) {
	var allIngredients []models.Ingredient

	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)

	if allIngredients, err = ingredientRepository.GetAll(); err != nil {
		fmt.Printf("firebase error", err)
	}

	return allIngredients, nil
}

func (r *mutationResolver) CreateIngredient(ctx context.Context, input models.NewIngredient) (*models.Ingredient, error) {
	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)
	if err != nil {
		fmt.Print("firebase error: ", err)
		return &models.Ingredient{}, err
	}

	var ingredientID string
	if ingredientID, err = ingredientRepository.GetID(); err != nil {
		fmt.Print("ingredientRepository GetID error: ", err)
		return &models.Ingredient{}, err
	}

	ingredient := models.Ingredient{
		ID:        ingredientID,
		Name:      input.Name,
		CreatedAt: time.Now().UTC(),
	}

	// Set the values in the DB
	if err = ingredientRepository.Insert(ingredient); err != nil {
		fmt.Print("firebase error: ", err)
		return &models.Ingredient{}, err
	}

	return &ingredient, nil
}

func (r *mutationResolver) UpdateIngredient(ctx context.Context, input models.UpdateIngredient) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeleteIngredient(ctx context.Context, input models.DeleteIngredient) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}
