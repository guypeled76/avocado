package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) Videos(ctx context.Context, filter apimodel.ResultsFilter) ([]apimodel.Video, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) VideosByHashTags(ctx context.Context, hashTags []int) ([]apimodel.Video, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) VideoByID(ctx context.Context, id int) (*apimodel.Video, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) CreateVideo(ctx context.Context, input apimodel.NewVideo) (*apimodel.Video, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdateVideo(ctx context.Context, input apimodel.UpdateVideo) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdateVideoHashTags(ctx context.Context, input apimodel.UpdateVideoHashTags) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) DeleteVideo(ctx context.Context, input apimodel.DeleteVideo) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}
