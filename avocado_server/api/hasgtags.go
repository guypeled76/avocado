package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *mutationResolver) CreateHashTag(ctx context.Context, name string) (*apimodel.HashTag, error) {
	db, err := r.GetDBConnection()
	if err != nil {
		return nil, err
	}

	hashtag, err := db.CreateHashTag(name)
	if err != nil {
		return nil, err
	}

	return &apimodel.HashTag{
		ID:        fmt.Sprint(hashtag.ID),
		Name:      hashtag.Name,
		CreatedAt: hashtag.CreatedAt,
		UpdatedAt: hashtag.UpdatedAt,
		DeletedAt: hashtag.DeletedAt,
	}, nil
}

func (r *queryResolver) HashTags(ctx context.Context) ([]apimodel.HashTag, error) {

	db, err := r.GetDBConnection()
	if err != nil {
		return []apimodel.HashTag{}, err
	}

	hashtags, err := db.GetHashTags()
	if err != nil {
		return []apimodel.HashTag{}, err
	}

	var results []apimodel.HashTag
	for _, hashtag := range hashtags {
		results = append(results, apimodel.HashTag{
			ID:   string(hashtag.ID),
			Name: hashtag.Name,
		})
	}
	return results, nil
}
