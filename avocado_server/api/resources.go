package api

import (
	"context"
	"errors"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/jinzhu/gorm"
)

func (r *mutationResolver) CreateResource(ctx context.Context, input apimodel.NewResource) (*apimodel.Resource, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return nil, err
	}

	resource := dalmodel.Resource{
		Name: input.Name,
	}

	err = repo.CreateResource(&resource)
	if err != nil {
		return nil, err
	}

	return convertResource(&resource), nil
}

func (r *mutationResolver) UpdateResource(ctx context.Context, input apimodel.UpdateResource) (*apimodel.Result, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return &apimodel.Result{Status: "error"}, err
	}

	uid := uint(input.ID)

	data := make(map[string]interface{})

	if input.Name != nil {
		data["Name"] = *input.Name
	}

	if len(data) > 0 {
		err = repo.UpdateResource(uid, data)
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

		err = hashtagRepo.UpdateResourceHashtags(uid, hashtags)
		if err != nil {
			return nil, err
		}
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *mutationResolver) DeleteResource(ctx context.Context, resourceId int) (*apimodel.Result, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteResource(uint(resourceId))
	if err != nil {
		return nil, err
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *queryResolver) Resources(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Resource, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return []apimodel.Resource{}, err
	}

	resources, err := repo.GetResources(filter)
	if err != nil {
		return []apimodel.Resource{}, err
	}

	var results []apimodel.Resource
	for _, resource := range resources {
		results = append(results, *convertResource(&resource))
	}
	return results, nil
}

func (r *queryResolver) ResourceByID(ctx context.Context, id int) (*apimodel.Resource, error) {
	return readResourceById(r, uint(id))
}

func (r *replyResolver) Resource(ctx context.Context, reply *apimodel.Reply) (*apimodel.Resource, error) {
	return readResource(r, reply.Resource)
}

func (r *messageResolver) Resource(ctx context.Context, message *apimodel.Message) (*apimodel.Resource, error) {
	return readResource(r, message.Resource)
}

func readResource(container sql.DBConnectionContainer, Resource *apimodel.Resource) (*apimodel.Resource, error) {
	if Resource == nil {
		return nil, errors.New("could no read null Resource")
	}

	return readResourceById(container, uint(Resource.ID))
}

func readResourceById(container sql.DBConnectionContainer, uid uint) (*apimodel.Resource, error) {
	repo, err := sql.CreateResourceRepo(container)
	if err != nil {
		return nil, err
	}

	return convertResourceWithError(repo.GetResource(uid))
}

func convertResourceWithError(Resource *dalmodel.Resource, err error) (*apimodel.Resource, error) {
	return convertResource(Resource), err
}

func convertResource(Resource *dalmodel.Resource) *apimodel.Resource {
	return &apimodel.Resource{
		ID:        int(Resource.ID),
		Name:      Resource.Name,
		CreatedAt: Resource.CreatedAt,
		UpdatedAt: Resource.UpdatedAt,
		DeletedAt: Resource.DeletedAt,
	}
}
