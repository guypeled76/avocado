package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
)

func (r *queryResolver) Ingredients(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Ingredient, error) {
	repo, err := sql.CreateIngredientRepo(r)
	if err != nil {
		return []apimodel.Ingredient{}, err
	}

	ingredients, err := repo.GetIngredients(filter)
	if err != nil {
		return []apimodel.Ingredient{}, err
	}

	return convertIngredients(ingredients), nil
}

func (r *mutationResolver) CreateIngredient(ctx context.Context, input apimodel.NewIngredient) (*apimodel.Ingredient, error) {
	repo, err := sql.CreateIngredientRepo(r)
	if err != nil {
		return nil, err
	}

	ingredient := dalmodel.Ingredient{
		Name: input.Name,
	}

	err = repo.CreateIngredient(ctx, &ingredient)
	if err != nil {
		return nil, err
	}

	return convertIngredient(&ingredient), nil
}

func (r *mutationResolver) UpdateIngredient(ctx context.Context, input apimodel.UpdateIngredient) (*apimodel.Result, error) {
	repo, err := sql.CreateIngredientRepo(r)
	if err != nil {
		return apimodel.CreateFailureResult(err)
	}

	uid := input.ID

	data := make(map[string]interface{})

	if input.Name != nil {
		data["Name"] = *input.Name
	}

	if input.Calories != nil {
		data["Calories"] = *input.Calories
	}

	// TODO: fill

	if len(data) > 0 {
		err = repo.UpdateUser(ctx, uid, data)
		if err != nil {
			return nil, err
		}
	}

	if input.Hashtags != nil {
		hashtagRepo, err := sql.CreateHashtagRepo(r)
		if err != nil {
			return nil, err
		}

		err = hashtagRepo.UpdateUserHashtags(uid, input.Hashtags)
		if err != nil {
			return nil, err
		}
	}

	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteIngredient(ctx context.Context, id int) (*apimodel.Result, error) {
	return apimodel.CreateSuccessResult()
}

func convertIngredients(ingredients []dalmodel.Ingredient) []apimodel.Ingredient {
	var results []apimodel.Ingredient
	for _, ingredient := range ingredients {
		results = append(results, *convertIngredient(&ingredient))
	}
	return results
}

func convertIngredient(ingredient *dalmodel.Ingredient) *apimodel.Ingredient {
	return &apimodel.Ingredient{
		ID: int(ingredient.ID),
	}
}
