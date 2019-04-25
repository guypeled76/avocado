package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) NotificationsByUserID(ctx context.Context, userID int) ([]apimodel.Notification, error) {
	panic("implement me")
}

func (r *userResolver) Notifications(ctx context.Context, obj *apimodel.User) ([]apimodel.Notification, error) {
	panic("implement me")
}
