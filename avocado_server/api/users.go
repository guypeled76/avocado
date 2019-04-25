package api

import (
	"context"
	"errors"
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

func (r *mutationResolver) DeleteUser(ctx context.Context, userId int) (*apimodel.Result, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteUser(uint(userId))
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

func (r *queryResolver) UserByID(ctx context.Context, id int) (*apimodel.User, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return nil, err
	}

	user, err := repo.GetUser(uint(id))
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

	uid := uint(input.ID)

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
		for _, hashtagId := range input.Hashtags {
			hashtags = append(hashtags, dalmodel.Hashtag{Model: gorm.Model{ID: uint(hashtagId)}})
		}

		err = hashtagRepo.UpdateUserHashtags(uid, hashtags)
		if err != nil {
			return nil, err
		}
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *userResolver) Image(ctx context.Context, user *apimodel.User) (*apimodel.Resource, error) {
	panic("implement me")
}

func (r *resourceResolver) CreatedBy(ctx context.Context, resource *apimodel.Resource) (*apimodel.User, error) {
	return readUser(r, resource.CreatedBy)
}

func (r *messageResolver) CreatedBy(ctx context.Context, message *apimodel.Message) (*apimodel.User, error) {
	return readUser(r, message.CreatedBy)
}

func (r *replyResolver) CreatedBy(ctx context.Context, reply *apimodel.Reply) (*apimodel.User, error) {
	return readUser(r, reply.CreatedBy)
}

func (r *postResolver) CreatedBy(ctx context.Context, post *apimodel.Post) (*apimodel.User, error) {
	return readUser(r, &post.CreatedBy)
}

func (r *hashtagResolver) CreatedBy(ctx context.Context, hashtag *apimodel.Hashtag) (*apimodel.User, error) {
	return readUser(r, hashtag.CreatedBy)
}

func readUser(container sql.DBConnectionContainer, user *apimodel.User) (*apimodel.User, error) {
	if user == nil {
		return nil, errors.New("could no read null user")
	}

	repo, err := sql.CreateUserRepo(container)
	if err != nil {
		return nil, err
	}

	return convertUserWithError(repo.GetUser(uint(user.ID)))

}

func createUser(id int) *apimodel.User {
	return &apimodel.User{ID: id}
}

func convertUserWithError(user *dalmodel.User, err error) (*apimodel.User, error) {
	return convertUser(user), err
}

func convertUser(user *dalmodel.User) *apimodel.User {
	return &apimodel.User{
		ID:          int(user.ID),
		Name:        user.Name,
		DisplayName: user.DisplayName,
		Email:       user.Email,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
		DeletedAt:   user.DeletedAt,
	}
}
