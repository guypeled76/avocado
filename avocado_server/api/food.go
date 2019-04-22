package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) Portions(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Portion, error) {
	panic("implement me")
}

func (r *queryResolver) Recipes(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Recipe, error) {
	panic("implement me")
}

func (r *mutationResolver) CreatePortion(ctx context.Context, input apimodel.NewPortion) (*apimodel.Portion, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdatePortion(ctx context.Context, input apimodel.UpdatePortion) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeletePortion(ctx context.Context, id string) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateRecipe(ctx context.Context, input apimodel.NewRecipe) (*apimodel.Recipe, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateRecipe(ctx context.Context, input apimodel.UpdateRecipe) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteRecipe(ctx context.Context, id string) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) CreatePortionType(ctx context.Context, input apimodel.NewPortionType) (*apimodel.PortionType, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdatePortionType(ctx context.Context, input apimodel.UpdatePortionType) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeletePortionType(ctx context.Context, id string) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *queryResolver) PortionTypes(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.PortionType, error) {
	panic("implement me")
}
