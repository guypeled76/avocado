package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) CurrentUser(ctx context.Context) (*apimodel.User, error) {
	panic("implement me")
}

func (r *queryResolver) UserByID(ctx context.Context, userID string) (*apimodel.User, error) {
	panic("implement me")
}
