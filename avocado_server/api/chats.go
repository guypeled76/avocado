package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
)

func (r *queryResolver) ChatsByUserID(ctx context.Context, id string) ([]apimodel.Chat, error) {
	panic("implement me")
}

func (r *queryResolver) ChatByID(ctx context.Context, id string) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(id)
	if err != nil {
		return nil, err
	}

	user, err := repo.GetChatById(uid)
	if err != nil {
		return nil, err
	}

	return convertChat(user), nil
}

func (r *mutationResolver) CreateChat(ctx context.Context, input apimodel.NewChat) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chat, err := repo.CreateChat(&dalmodel.Chat{})
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *mutationResolver) CreateMessage(ctx context.Context, input apimodel.NewMessage) (*apimodel.Message, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	message, err := repo.CreateMessage(&dalmodel.Message{})

	if err != nil {
		return nil, err
	}

	return convertMessage(message), nil
}

func (r *queryResolver) Chats(ctx context.Context, filter *apimodel.ResultsFilter) ([]apimodel.Chat, error) {

	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chats, err := repo.GetChats(filter)
	if err != nil {
		return []apimodel.Chat{}, err
	}

	var results []apimodel.Chat
	for _, chat := range chats {
		results = append(results, *convertChat(&chat))
	}
	return results, nil

}

func (r *mutationResolver) UpdateMessage(ctx context.Context, input apimodel.UpdateMessage) (*apimodel.Result, error) {
	return &apimodel.Result{
		Status: apimodel.ResultStatusSuccess,
	}, nil
}

func (r *mutationResolver) DeleteMessage(ctx context.Context, messageId string) (*apimodel.Result, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	id, err := sql.ParseUint(messageId)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteChat(id)
	if err != nil {
		return nil, err
	}

	return &apimodel.Result{Status: "ok"}, nil
}

func (r *queryResolver) Chat(ctx context.Context, chatID string) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(chatID)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatById(uid)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *postResolver) Chat(ctx context.Context, obj *apimodel.Post) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	postId, err := sql.ParseUint(obj.ID)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatByPostId(postId)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *userResolver) Chat(ctx context.Context, obj *apimodel.User) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(obj.ID)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatByUserId(uid)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func convertMessage(message *dalmodel.Message) *apimodel.Message {
	return &apimodel.Message{
		ID: fmt.Sprint(message.ID),
	}
}

func convertChat(chat *dalmodel.Chat) *apimodel.Chat {
	return &apimodel.Chat{
		ID: fmt.Sprint(chat.ID),
	}
}

func (chatResolver) Messages(ctx context.Context, obj *apimodel.Chat, filter apimodel.ResultsFilter) ([]apimodel.Message, error) {
	panic("implement me")
}
