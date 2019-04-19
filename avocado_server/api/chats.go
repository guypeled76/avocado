package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"time"
)

func (r *queryResolver) ChatsByUserID(ctx context.Context, userID string) ([]apimodel.Chat, error) {
	panic("implement me")
}

func (r *queryResolver) ChatByID(ctx context.Context, chatID string) (*apimodel.Chat, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateChat(ctx context.Context, input apimodel.NewChat) (*apimodel.Chat, error) {
	return &apimodel.Chat{
		ID: "ddd",
		Messages: []apimodel.Message{{
			ID:        "dd",
			Message:   "222",
			CreatedBy: "fr",
			CreateAt:  time.Now().UTC(),
		},
			{
				ID:        "dd1",
				Message:   "333",
				CreatedBy: "fr",
				CreateAt:  time.Now().UTC(),
			},
		},
		CreatedAt: time.Now().UTC(),
	}, nil
}

func (r *mutationResolver) CreateMessage(ctx context.Context, input apimodel.NewMessage) (*apimodel.Message, error) {
	return &apimodel.Message{
		ID:        "dd",
		Message:   input.Message,
		CreatedBy: "ddd",
		CreateAt:  time.Now().UTC(),
	}, nil
}

func (r *queryResolver) Chats(ctx context.Context) ([]apimodel.Chat, error) {

	return []apimodel.Chat{{
		ID: "ddd",
		Messages: []apimodel.Message{{
			ID:        "dd",
			Message:   "222",
			CreatedBy: "fr",
			CreateAt:  time.Now().UTC(),
		},
			{
				ID:        "dd1",
				Message:   "333",
				CreatedBy: "fr",
				CreateAt:  time.Now().UTC(),
			},
		},
		CreatedAt: time.Now().UTC(),
	},
	}, nil
}

func (r *mutationResolver) UpdateMessage(ctx context.Context, input apimodel.UpdateMessage) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeleteMessage(ctx context.Context, input apimodel.DeleteMessage) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}

func (r *queryResolver) Chat(ctx context.Context, chatID string) (*apimodel.Chat, error) {
	return &apimodel.Chat{
		ID: "ddd",
		Messages: []apimodel.Message{{
			ID:        "dd",
			Message:   "222",
			CreatedBy: "fr",
			CreateAt:  time.Now().UTC(),
		},
			{
				ID:        "dd1",
				Message:   "333",
				CreatedBy: "fr",
				CreateAt:  time.Now().UTC(),
			},
		},
		CreatedAt: time.Now().UTC(),
	}, nil
}

func (r *postResolver) Chat(ctx context.Context, obj *apimodel.Post) (*apimodel.Chat, error) {
	panic("implement me")
}

func (r *userResolver) Chat(ctx context.Context, obj *apimodel.User) (*apimodel.Chat, error) {
	panic("implement me")
}
