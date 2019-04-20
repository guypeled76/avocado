package api

import (
	"context"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
)

func (r *queryResolver) ChatsByUserID(ctx context.Context, id string) ([]apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(id)
	if err != nil {
		return nil, err
	}

	chats, err := repo.GetChatsByUserId(uid)
	if err != nil {
		return nil, err
	}

	return convertChats(chats), nil
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
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return &apimodel.Result{Status: "error"}, err
	}

	// TODO
	messageId, err := sql.ParseUint("id")
	if err != nil {
		return nil, err
	}

	data := make(map[string]interface{})

	if input.Message != nil {
		data["Name"] = *input.Message
	}

	if len(data) > 0 {
		err = repo.UpdateMessage(messageId, data)
		if err != nil {
			return nil, err
		}
	}

	return &apimodel.Result{Status: "ok"}, nil
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

func (r *postResolver) Chat(ctx context.Context, post *apimodel.Post) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	postId, err := sql.ParseUint(post.ID)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatByPostId(postId)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *userResolver) Chat(ctx context.Context, user *apimodel.User) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	uid, err := sql.ParseUint(user.ID)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetPrimaryChatByUserId(uid)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *chatResolver) Messages(ctx context.Context, chat *apimodel.Chat, filter apimodel.ResultsFilter) ([]apimodel.Message, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chatId, err := sql.ParseUint(chat.ID)
	if err != nil {
		return nil, err
	}

	messages, err := repo.GetMessagesByChatId(chatId)
	if err != nil {
		return nil, err
	}

	return convertMessages(messages), nil
}

func convertMessages(messages []dalmodel.Message) []apimodel.Message {
	result := make([]apimodel.Message, 0)
	for _, message := range messages {
		result = append(result, *convertMessage(&message))
	}
	return result
}

func convertMessage(message *dalmodel.Message) *apimodel.Message {
	return &apimodel.Message{
		ID: fmt.Sprint(message.ID),
	}
}

func convertChats(chats []dalmodel.Chat) []apimodel.Chat {
	result := make([]apimodel.Chat, 0)
	for _, chat := range chats {
		result = append(result, *convertChat(&chat))
	}
	return result
}

func convertChat(chat *dalmodel.Chat) *apimodel.Chat {
	return &apimodel.Chat{
		ID: fmt.Sprint(chat.ID),
	}
}
