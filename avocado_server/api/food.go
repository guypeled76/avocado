package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *mutationResolver) CreateRecipe(ctx context.Context, input models.NewRecipe) (*models.Recipe, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateRecipe(ctx context.Context, input models.UpdateRecipe) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteRecipe(ctx context.Context, input models.DeleteRecipe) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateMeal(ctx context.Context, input models.NewMeal) (*models.Meal, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateMeal(ctx context.Context, input models.UpdateMeal) (*models.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteMeal(ctx context.Context, input models.DeleteMeal) (*models.Result, error) {
	panic("implement me")
}

func (r *queryResolver) Meals(ctx context.Context) ([]models.Meal, error) {
	panic("implement me")
}

func (r *queryResolver) Recipes(ctx context.Context) ([]models.Recipe, error) {
	panic("implement me")
}
