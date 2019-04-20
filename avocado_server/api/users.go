package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/jinzhu/gorm"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input apimodel.NewUser) (*apimodel.User, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	user := dalmodel.User{
		Name:        input.Name,
		DisplayName: input.DisplayName,
		Email:       input.Email,
	}

	err = repo.CreateUser(&user)
	if err != nil {
		return nil, err
	}

	return convertUser(&user), nil
}

func (r *mutationResolver) DeleteUser(ctx context.Context, userId string) (*apimodel.Result, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	id, err := sql.ParseUint(userId)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteUser(id)
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

func (r *queryResolver) UserByID(ctx context.Context, id string) (*apimodel.User, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(id)
	if err != nil {
		return nil, err
	}

	user, err := repo.GetUser(uid)
	if err != nil {
		return nil, err
	}

	return convertUser(user), nil
}

func (r *mutationResolver) UpdateUser(ctx context.Context, input apimodel.UpdateUser) (*apimodel.Result, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return &apimodel.Result{Status: "error"}, err
	}

	uid, err := sql.ParseUint(input.ID)
	if err != nil {
		return nil, err
	}

	data := make(map[string]interface{})

	if input.Name != nil {
		data["Name"] = *input.Name
	}

	if input.DisplayName != nil {
		data["DisplayName"] = *input.DisplayName
	}

	if input.Email != nil {
		data["Email"] = *input.Email
	}

	if len(data) > 0 {
		err = repo.UpdateUser(uid, data)
		if err != nil {
			return nil, err
		}
	}

	if input.Hashtags != nil {
		hashtagRepo, err := sql.CreateHashtagRepo(r)
		if err != nil {
			return nil, err
		}
		hashtags := make([]dalmodel.Hashtag, 0)
		for _, id := range input.Hashtags {
			hashtagId, err := sql.ParseUint(id)
			if err != nil {
				return nil, err
			}
			hashtags = append(hashtags, dalmodel.Hashtag{Model: gorm.Model{ID: hashtagId}})
		}

		err = hashtagRepo.UpdateUserHashtags(uid, hashtags)
		if err != nil {
			return nil, err
		}
	}

	return &apimodel.Result{Status: "ok"}, nil
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
