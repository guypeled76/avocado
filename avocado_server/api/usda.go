package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/usda"
)

func (usdaQueryResolver) SearchIngredients(ctx context.Context, obj *apimodel.USDAQuery, filter apimodel.USDAResultsFilter) ([]apimodel.USDAIngredientResult, error) {
	ingredients := make([]apimodel.USDAIngredientResult, 0)

	repo, err := usda.CreateRepository(nil)
	if err != nil {
		return ingredients, err
	}

	results, err := repo.SearchByName(ctx, filter.Wildcard)
	if err != nil {
		return ingredients, err
	}

	if results.List.Total == 0 {
		return ingredients, nil
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

	repo, err := usda.CreateRepository(nil)
	if err != nil {
		return nil, err
	}

	result, err := repo.GetFoodNutrientsReport(ctx, fmt.Sprint(ingredientId))
	if err != nil {
		return nil, err
	}

	return &apimodel.USDAIngredient{
		Name: result.Report.Foods[0].Name,
	}, nil
}

func (r *queryResolver) Usda(ctx context.Context) (*apimodel.USDAQuery, error) {
	return &apimodel.USDAQuery{}, nil
}
