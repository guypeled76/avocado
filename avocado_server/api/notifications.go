package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) NotificationsByUserID(ctx context.Context, userID string) ([]models.Notification, error) {
	panic("implement me")
}
