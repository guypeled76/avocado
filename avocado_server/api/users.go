package api

import (
	"context"
	"errors"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"strconv"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input apimodel.NewUser) (*apimodel.User, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	hashtag, err := repo.CreateUser(input)
	if err != nil {
		return nil, err
	}

	return convertUser(hashtag), nil
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id string) (*apimodel.Result, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		return nil, errors.New("could not parse uint from hash tag id")
	}

	err = repo.DeleteUser(uint(uid))
	if err != nil {
		return nil, err
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *queryResolver) Users(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.User, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return []apimodel.User{}, err
	}

	users, err := repo.GetUsers(filter)
	if err != nil {
		return []apimodel.User{}, err
	}

	var results []apimodel.User
	for _, user := range users {
		results = append(results, *convertUser(&user))
	}
	return results, nil
}

func (r *queryResolver) CurrentUser(ctx context.Context) (*apimodel.User, error) {
	panic("implement me")
}

func (r *queryResolver) UserByID(ctx context.Context, userID string) (*apimodel.User, error) {
	panic("implement me")
}

func convertUser(user *dalmodel.User) *apimodel.User {
	return &apimodel.User{
		ID:          fmt.Sprint(user.ID),
		Name:        user.Name,
		DisplayName: user.DisplayName,
		Image:       user.Image,
		Email:       user.Email,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
		DeletedAt:   user.DeletedAt,
	}
}
