package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) CurrentUser(ctx context.Context) (*models.User, error) {
	panic("implement me")
}

func (r *queryResolver) UserByID(ctx context.Context, userID string) (*models.User, error) {
	panic("implement me")
}
