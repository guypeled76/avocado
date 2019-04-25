package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) NotificationsByUserID(ctx context.Context, userID int) ([]apimodel.Notification, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *userResolver) Notifications(ctx context.Context, obj *apimodel.User) ([]apimodel.Notification, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}
