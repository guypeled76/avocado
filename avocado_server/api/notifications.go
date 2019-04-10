package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) NotificationsByUserID(ctx context.Context, userID string) ([]apimodel.Notification, error) {
	panic("implement me")
}
