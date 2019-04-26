package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/gremlinsapps/avocado_server/helpers"
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

	err = repo.DeleteUser(userId)
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
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) UserByID(ctx context.Context, id int) (*apimodel.User, error) {
	return readUserById(r, id)
}

func (r *mutationResolver) UpdateUser(ctx context.Context, input apimodel.UpdateUser) (*apimodel.Result, error) {
	repo, err := sql.CreateUserRepo(r)
	if err != nil {
		return &apimodel.Result{Status: "error"}, err
	}

	uid := input.ID

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

	if input.Thumbnail != nil {
		data["Thumbnail"] = *input.Thumbnail
	}

	if input.Image != nil {
		data["Image"] = *input.Image
	}

	if input.Video != nil {
		data["Video"] = *input.Video
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

		err = hashtagRepo.UpdateUserHashtags(uid, input.Hashtags)
		if err != nil {
			return nil, err
		}
	}

	return &apimodel.Result{Status: "ok"}, nil
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

func (r *measurementResolver) CreatedBy(ctx context.Context, measurement *apimodel.Measurement) (*apimodel.User, error) {
	return readUser(r, measurement.CreatedBy)
}

func (r *measurementResolver) UpdatedBy(ctx context.Context, measurement *apimodel.Measurement) (*apimodel.User, error) {
	return readUser(r, measurement.UpdatedBy)
}

func (r *resourceResolver) UpdatedBy(ctx context.Context, resource *apimodel.Resource) (*apimodel.User, error) {
	return readUser(r, resource.UpdatedBy)
}

func (r *replyResolver) UpdatedBy(ctx context.Context, reply *apimodel.Reply) (*apimodel.User, error) {
	return readUser(r, reply.UpdatedBy)
}

func (r *messageResolver) UpdatedBy(ctx context.Context, message *apimodel.Message) (*apimodel.User, error) {
	return readUser(r, message.UpdatedBy)
}

func (r *hashtagResolver) UpdatedBy(ctx context.Context, hashtag *apimodel.Hashtag) (*apimodel.User, error) {
	return readUser(r, hashtag.UpdatedBy)
}

func readUser(container sql.DBConnectionContainer, user *apimodel.User) (*apimodel.User, error) {
	if user == nil {
		return nil, nil
	}

	return readUserById(container, user.ID)
}

func readUserById(container sql.DBConnectionContainer, uid int) (*apimodel.User, error) {
	repo, err := sql.CreateUserRepo(container)
	if err != nil {
		return nil, err
	}

	return convertUserWithError(repo.GetUser(uid))
}

func createEmptyUser(id int) *apimodel.User {
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
		Thumbnail:   &user.Thumbnail,
		Image:       &user.Image,
		Video:       &user.Video,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
		DeletedAt:   user.DeletedAt,
	}
}
