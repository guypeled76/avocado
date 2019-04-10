package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) VideosByHashTags(ctx context.Context, hashTags []string) ([]apimodel.Video, error) {
	panic("implement me")
}

func (r *queryResolver) VideoByID(ctx context.Context, id string) (*apimodel.Video, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateVideo(ctx context.Context, input apimodel.NewVideo) (*apimodel.Video, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateVideo(ctx context.Context, input apimodel.UpdateVideo) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateVideoHashTags(ctx context.Context, input apimodel.UpdateVideoHashTags) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteVideo(ctx context.Context, input apimodel.DeleteVideo) (*apimodel.Result, error) {
	panic("implement me")
}
