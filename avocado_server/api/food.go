package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *mutationResolver) CreateRecipe(ctx context.Context, input apimodel.NewRecipe) (*apimodel.Recipe, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateRecipe(ctx context.Context, input apimodel.UpdateRecipe) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteRecipe(ctx context.Context, input apimodel.DeleteRecipe) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateMeal(ctx context.Context, input apimodel.NewMeal) (*apimodel.Meal, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateMeal(ctx context.Context, input apimodel.UpdateMeal) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteMeal(ctx context.Context, input apimodel.DeleteMeal) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *queryResolver) Meals(ctx context.Context) ([]apimodel.Meal, error) {
	panic("implement me")
}

func (r *queryResolver) Recipes(ctx context.Context) ([]apimodel.Recipe, error) {
	panic("implement me")
}
