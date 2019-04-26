package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
)

func (r *mutationResolver) DeleteHashtag(ctx context.Context, id int) (*apimodel.Result, error) {

	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteHashtag(id)
	if err != nil {
		return nil, err
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *mutationResolver) CreateHashtag(ctx context.Context, name string) (*apimodel.Hashtag, error) {

	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return nil, err
	}

	hashtag, err := repo.CreateHashtag(name)
	if err != nil {
		return nil, err
	}

	return convertHashtag(hashtag), nil
}

func (r *queryResolver) Hashtags(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Hashtag, error) {

	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return []apimodel.Hashtag{}, err
	}

	hashtags, err := repo.GetHashtags(filter)
	if err != nil {
		return []apimodel.Hashtag{}, err
	}

	return convertHashtags(hashtags), nil
}

func (r *postResolver) Hashtags(ctx context.Context, post *apimodel.Post) ([]apimodel.Hashtag, error) {
	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return nil, err
	}

	hashTags, err := repo.GetPostHashtags(post.ID)
	if err != nil {
		return nil, err
	}

	return convertHashtags(hashTags), nil
}

func (r *userResolver) Hashtags(ctx context.Context, user *apimodel.User) ([]apimodel.Hashtag, error) {
	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return nil, err
	}

	hashTags, err := repo.GetUserHashtags(user.ID)
	if err != nil {
		return nil, err
	}

	return convertHashtags(hashTags), nil
}

func (r *queryResolver) HashtagsRelatedTo(ctx context.Context, hashtagContext apimodel.HashtagContext, filter *apimodel.ResultsFilter) ([]apimodel.Hashtag, error) {
	repo, err := sql.CreateHashtagRepo(r)
	if err != nil {
		return nil, err
	}

	hashtags := make([]apimodel.Hashtag, 0)
	switch hashtagContext {
	case apimodel.HashtagContextIngredients:
		hashtags, err = convertHashtagsWithError(repo.GetIngredientHashtags(filter))
		break
	case apimodel.HashtagContextMeals:
		hashtags, err = convertHashtagsWithError(repo.GetHashtagsRelatedToMeals(filter))
		break
	case apimodel.HashtagContextVideo:
		hashtags, err = convertHashtagsWithError(repo.GetHashtagsRelatedToVideos(filter))
		break
	case apimodel.HashtagContextPhotos:
		hashtags, err = convertHashtagsWithError(repo.GetHashtagsRelatedToPhotos(filter))
		break
	case apimodel.HashtagContextPosts:
		hashtags, err = convertHashtagsWithError(repo.GetHashtagsRelatedToPosts(filter))
		break
	case apimodel.HashtagContextRecipes:
		hashtags, err = convertHashtagsWithError(repo.GetHashtagsRelatedToRecipes(filter))
		break
	}

	if err != nil {
		return nil, err
	}

	return hashtags, nil
}

func convertHashtagsWithError(hashtags []dalmodel.Hashtag, err error) ([]apimodel.Hashtag, error) {
	return convertHashtags(hashtags), err
}

func convertHashtags(hashtags []dalmodel.Hashtag) []apimodel.Hashtag {
	result := make([]apimodel.Hashtag, 0)

	for _, hashtag := range hashtags {
		result = append(result, *convertHashtag(&hashtag))
	}

	return result
}

func convertHashtag(hashtag *dalmodel.Hashtag) *apimodel.Hashtag {
	return &apimodel.Hashtag{
		ID:        int(hashtag.ID),
		Name:      hashtag.Name,
		CreatedAt: hashtag.CreatedAt,
		CreatedBy: createEmptyUser(hashtag.AuditModel.CreatedByID),
		UpdatedAt: hashtag.UpdatedAt,
		UpdatedBy: createEmptyUser(hashtag.AuditModel.UpdatedByID),
		DeletedAt: hashtag.DeletedAt,
		DeletedBy: createEmptyUser(hashtag.AuditModel.DeletedByID),
	}
}
