package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/usda"
)

func (usdaQueryResolver) SearchIngredients(ctx context.Context, obj *apimodel.USDAQuery, filter apimodel.USDAResultsFilter) ([]apimodel.USDAIngredientResult, error) {
	ingredients := make([]apimodel.USDAIngredientResult, 0)

	repo, err := usda.CreateRepository(nil)
	if err != nil {
		return ingredients, err
	}

	results, err := repo.Search(ctx, &usda.SearchParams{}, &usda.QueryOptions{})
	if err != nil {
		return ingredients, err
	}

	for _, item := range results.List.Item {
		ingredients = append(ingredients, apimodel.USDAIngredientResult{
			ID:   1,
			Name: item.Name,
		})
	}
	return ingredients, nil
}

func (usdaQueryResolver) Ingredient(ctx context.Context, obj *apimodel.USDAQuery, ingredientId int) (*apimodel.USDAIngredient, error) {
	return &apimodel.USDAIngredient{}, nil
}

func (r *queryResolver) Usda(ctx context.Context) (*apimodel.USDAQuery, error) {
	return &apimodel.USDAQuery{}, nil
}
