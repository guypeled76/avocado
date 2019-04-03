package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
	"time"
)

func (r *queryResolver) ChatsByUserID(ctx context.Context, userID string) ([]models.Chat, error) {
	panic("implement me")
}

func (r *queryResolver) ChatByID(ctx context.Context, chatID string) (*models.Chat, error) {
	panic("implement me")
}

func (r *mutationResolver) CreateChat(ctx context.Context) (*models.Chat, error) {
	return &models.Chat{
		ID: "ddd",
		Messages: []models.Message{{
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

func (r *mutationResolver) CreateMessage(ctx context.Context, input models.NewMessage) (*models.Message, error) {
	return &models.Message{
		ID:        "dd",
		Message:   input.Message,
		CreatedBy: "ddd",
		CreateAt:  time.Now().UTC(),
	}, nil
}

func (r *queryResolver) Chats(ctx context.Context) ([]models.Chat, error) {

	return []models.Chat{{
		ID: "ddd",
		Messages: []models.Message{{
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

func (r *mutationResolver) UpdateMessage(ctx context.Context, input models.UpdateMessage) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeleteMessage(ctx context.Context, input models.DeleteMessage) (*models.Result, error) {
	return &models.Result{
		Status: models.ResultStatusSuccess,
	}, nil
}

func (r *queryResolver) Chat(ctx context.Context, chatID string) (*models.Chat, error) {
	return &models.Chat{
		ID: "ddd",
		Messages: []models.Message{{
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
