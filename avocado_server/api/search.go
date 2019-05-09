package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/google"
)

func (r *queryResolver) Google(ctx context.Context, search string) (*apimodel.GoogleQuery, error) {

	engine, err := google.Search(ctx, search)
	if err != nil {
		return nil, err
	}

	return &apimodel.GoogleQuery{
		Engine: engine,
	}, nil
}

func (googleResolver) Ingredient(ctx context.Context, obj *apimodel.GoogleQuery) (*apimodel.Ingredient, error) {
	return &apimodel.Ingredient{}, nil
}
