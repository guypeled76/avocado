package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
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

	uid := input.ID

	data := make(map[string]interface{})

	if input.Name != nil {
		data["Name"] = *input.Name
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

		err = hashtagRepo.UpdateResourceHashtags(uid, input.Hashtags)
		if err != nil {
			return nil, err
		}
	}

	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteResource(ctx context.Context, resourceId int) (*apimodel.Result, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteResource(resourceId)
	if err != nil {
		return nil, err
	}

	return apimodel.CreateSuccessResult()
}

func (r *userResolver) Resources(ctx context.Context, obj *apimodel.User, filter *apimodel.ResultsFilter) ([]apimodel.Resource, error) {
	repo, err := sql.CreateResourceRepo(r)
	if err != nil {
		return []apimodel.Resource{}, err
	}

	resources, err := repo.GetResources(filter)
	if err != nil {
		return []apimodel.Resource{}, err
	}

	return convertResources(resources), nil
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

	return convertResources(resources), nil
}

func (r *queryResolver) ResourceByID(ctx context.Context, id int) (*apimodel.Resource, error) {
	return readResourceById(r, id)
}

func (r *replyResolver) Resource(ctx context.Context, reply *apimodel.Reply) (*apimodel.Resource, error) {
	return readResource(r, reply.Resource)
}

func (r *messageResolver) Resource(ctx context.Context, message *apimodel.Message) (*apimodel.Resource, error) {
	return readResource(r, message.Resource)
}

func readResource(container sql.DBConnectionContainer, Resource *apimodel.Resource) (*apimodel.Resource, error) {
	if Resource == nil {
		return nil, nil
	}

	return readResourceById(container, Resource.ID)
}

func readResourceById(container sql.DBConnectionContainer, uid int) (*apimodel.Resource, error) {
	repo, err := sql.CreateResourceRepo(container)
	if err != nil {
		return nil, err
	}

	return convertResourceWithError(repo.GetResource(uid))
}

func convertResources(resources []dalmodel.Resource) []apimodel.Resource {
	var results []apimodel.Resource
	for _, resource := range resources {
		results = append(results, *convertResource(&resource))
	}
	return results
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
