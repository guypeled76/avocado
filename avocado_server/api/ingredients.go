package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) Ingredients(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Ingredient, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) CreateIngredient(ctx context.Context, input apimodel.NewIngredient) (*apimodel.Ingredient, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdateIngredient(ctx context.Context, input apimodel.UpdateIngredient) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteIngredient(ctx context.Context, id int) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}
