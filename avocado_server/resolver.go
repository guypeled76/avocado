//go:generate gorunpkg github.com/99designs/gqlgen

package go_graphql_jobs

import (
	context "context"

	graph "github.com/gremlinsapps/avocado_server/graph"
	models "github.com/gremlinsapps/avocado_server/models"
)

type Resolver struct{}

func (r *Resolver) Mutation() graph.MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() graph.QueryResolver {
	return &queryResolver{r}
}

type mutationResolver struct{ *Resolver }

func (r *mutationResolver) CreateIngredient(ctx context.Context, input models.NewIngredient) (*models.Ingredient, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateApplication(ctx context.Context, input models.NewApplication) (*models.Application, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateJob(ctx context.Context, input models.NewJob) (*models.Job, error) {
	panic("not implemented")
}
func (r *mutationResolver) DeleteJob(ctx context.Context, id string) (string, error) {
	panic("not implemented")
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Ingredients(ctx context.Context) ([]*models.Ingredient, error) {
	panic("implement me")
}

func (r *queryResolver) Jobs(ctx context.Context) ([]models.Job, error) {
	panic("not implemented")
}
func (r *queryResolver) Applications(ctx context.Context, jobID string) ([]models.Application, error) {
	panic("not implemented")
}
