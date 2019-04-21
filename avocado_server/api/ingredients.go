package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) Ingredients(ctx context.Context) ([]apimodel.Ingredient, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateIngredient(ctx context.Context, input apimodel.NewIngredient) (*apimodel.Ingredient, error) {

	panic("implement me")
}

func (r *mutationResolver) UpdateIngredient(ctx context.Context, input apimodel.UpdateIngredient) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteIngredient(ctx context.Context, id string) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}
