//go:generate gorunpkg github.com/99designs/gqlgen

package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/dal"
	"github.com/gremlinsapps/avocado_server/dal/firebase"
	"github.com/gremlinsapps/avocado_server/graph"
	"github.com/gremlinsapps/avocado_server/models"
	"time"
)

type Resolver struct {
	db *firebase.DBConnection
}

func (r *Resolver) Mutation() graph.MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() graph.QueryResolver {
	return &queryResolver{r}
}

// Mutations
type mutationResolver struct{ *Resolver }

func (r *mutationResolver) CreateIngredient(ctx context.Context, input models.NewIngredient) (*models.Ingredient, error) {
	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)
	if err != nil {
		fmt.Print("firebase error: ", err)
		return &models.Ingredient{}, err
	}

	var ingredientID string
	if ingredientID, err = ingredientRepository.GetID(); err != nil {
		fmt.Print("ingredientRepository GetID error: ", err)
		return &models.Ingredient{}, err
	}

	// Create job object from request
	ingredient := models.Ingredient{
		ID:        ingredientID,
		Name:      input.Name,
		CreatedBy: models.User{Name: input.CreatedByID},
		CreatedAt: time.Now().UTC(),
	}

	// Set the values in the DB
	if err = ingredientRepository.Insert(ingredient); err != nil {
		fmt.Print("firebase error: ", err)
		return &models.Ingredient{}, err
	}

	return &ingredient, nil
}

func (r *mutationResolver) CreateJob(ctx context.Context, input models.NewJob) (*models.Job, error) {
	jobRepository, err := dal.NewJobFirebaseRepository(r.db.Conn, r.db.Context)
	if err != nil {
		fmt.Printf("firebase error: ", err)
		return &models.Job{}, err
	}

	var jobID string
	if jobID, err = jobRepository.GetID(); err != nil {
		fmt.Printf("jobRepository GetID error: ", err)
		return &models.Job{}, err
	}
	// Create job object from request
	job := models.Job{
		ID:          jobID,
		Name:        input.Name,
		Description: input.Description,
		Location:    input.Location,
		CreatedBy:   models.User{Name: input.CreatedByID},
		CreatedAt:   time.Now().UTC(),
	}

	// Set the values in the DB
	if err = jobRepository.Insert(job); err != nil {
		fmt.Printf("firebase error: ", err)
		return &models.Job{}, err
	}

	return &job, nil
}
func (r *mutationResolver) DeleteJob(ctx context.Context, id string) (string, error) {
	panic("not implemented")
}
func (r *mutationResolver) CreateApplication(ctx context.Context, input models.NewApplication) (*models.Application, error) {
	panic("not implemented")
}

// Queries
type queryResolver struct{ *Resolver }

func (r *queryResolver) Ingredients(ctx context.Context) ([]models.Ingredient, error) {
	var allIngredients []models.Ingredient

	ingredientRepository, err := dal.NewIngredientFirebaseRepository(r.db.Conn, r.db.Context)

	if allIngredients, err = ingredientRepository.GetAll(); err != nil {
		fmt.Printf("firebase error", err)
	}

	return allIngredients, nil
}

func (r *queryResolver) Jobs(ctx context.Context) ([]models.Job, error) {
	var allJobs []models.Job

	jobRepository, err := dal.NewJobFirebaseRepository(r.db.Conn, r.db.Context)

	if allJobs, err = jobRepository.GetAll(); err != nil {
		fmt.Printf("firebase error", err)
	}

	return allJobs, nil
}
func (r *queryResolver) Applications(ctx context.Context, jobID string) ([]models.Application, error) {
	panic("not implemented")
}

// Resolvers
type jobResolver struct{ *Resolver }

func (r *jobResolver) CreatedBy(ctx context.Context, obj *models.Job) (*models.User, error) {
	userRepository, err := dal.NewUserFirebaseRepository(r.db.App, r.db.Context)
	if err != nil {
		fmt.Printf("Error Fetching NewTeamFirebaseRepository", err)
		return &models.User{}, err
	}
	user, err := userRepository.GetByID(obj.CreatedBy.ID)
	if err != nil {
		fmt.Printf("Error Fetching user", err)
		return &models.User{}, err
	}
	return &user, err
}

type applicationResolver struct{ *Resolver }

func (r *applicationResolver) Job(ctx context.Context, obj *models.Application) (*models.Job, error) {
	panic("not implemented")
}

func NewRootResolvers() graph.Config {
	resolver := Resolver{}
	resolver.db = firebase.Connect()

	c := graph.Config{
		Resolvers: &resolver,
	}
	return c
}
