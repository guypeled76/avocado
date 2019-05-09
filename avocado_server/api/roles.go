package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *mutationResolver) CreateRole(ctx context.Context, input apimodel.NewRole) (*apimodel.Role, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdateRole(ctx context.Context, input apimodel.UpdateRole) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeleteRole(ctx context.Context, id int) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) CreatePermission(ctx context.Context, input apimodel.NewPermission) (*apimodel.Permission, error) {
	panic("implement me")
}

func (r *mutationResolver) UpdatePermission(ctx context.Context, input apimodel.UpdatePermission) (*apimodel.Result, error) {
	panic("implement me")
}

func (r *mutationResolver) DeletePermission(ctx context.Context, id int) (*apimodel.Result, error) {
	panic("implement me")
}

func (roleResolver) Permissions(ctx context.Context, obj *apimodel.Role) ([]apimodel.Permission, error) {
	panic("implement me")
}

func (r *queryResolver) Roles(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Role, error) {
	panic("implement me")
}

func (r *queryResolver) RoleByID(ctx context.Context, id int) (*apimodel.Role, error) {
	panic("implement me")
}

func (r *queryResolver) Permissions(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Permission, error) {
	panic("implement me")
}

func (r *queryResolver) PermissionByID(ctx context.Context, id int) (*apimodel.Permission, error) {
	panic("implement me")
}

func (r *queryResolver) PermissionByName(ctx context.Context, name string) (*apimodel.Permission, error) {
	panic("implement me")
}

func (r *userResolver) Roles(ctx context.Context, obj *apimodel.User) ([]apimodel.Role, error) {
	panic("implement me")
}
