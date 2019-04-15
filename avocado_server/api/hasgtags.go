package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"strconv"
)

func (r *mutationResolver) DeleteHashTag(ctx context.Context, id string) (*apimodel.Result, error) {

	repo, err := sql.CreateHashTagRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteHashTag(uint(uid))
	if err != nil {
		return nil, err
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *mutationResolver) CreateHashTag(ctx context.Context, name string) (*apimodel.HashTag, error) {

	repo, err := sql.CreateHashTagRepo(r)
	if err != nil {
		return nil, err
	}

	hashtag, err := repo.CreateHashTag(name)
	if err != nil {
		return nil, err
	}

	return convertHashTag(hashtag), nil
}

func (r *queryResolver) HashTags(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.HashTag, error) {

	repo, err := sql.CreateHashTagRepo(r)
	if err != nil {
		return []apimodel.HashTag{}, err
	}

	hashtags, err := repo.GetHashTags(filter)
	if err != nil {
		return []apimodel.HashTag{}, err
	}

	var results []apimodel.HashTag
	for _, hashtag := range hashtags {
		results = append(results, *convertHashTag(&hashtag))
	}
	return results, nil
}

func convertHashTag(hashtag *dalmodel.HashTag) *apimodel.HashTag {
	return &apimodel.HashTag{
		ID:        fmt.Sprint(hashtag.ID),
		Name:      hashtag.Name,
		CreatedAt: hashtag.CreatedAt,
		UpdatedAt: hashtag.UpdatedAt,
		DeletedAt: hashtag.DeletedAt,
	}
}
