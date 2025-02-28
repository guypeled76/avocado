package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) ChatsByUserID(ctx context.Context, id int) ([]apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chats, err := repo.GetChatsByUserId(id)
	if err != nil {
		return nil, err
	}

	return convertChats(chats), nil
}

func (r *queryResolver) ChatByID(ctx context.Context, id int) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	user, err := repo.GetChatById(id)
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

	chat, err := repo.CreateChat(ctx, &dalmodel.Chat{})
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

	message, err := repo.CreateMessage(ctx, &dalmodel.Message{})

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

	return convertChats(chats), nil
}

func (r *mutationResolver) UpdateMessage(ctx context.Context, input apimodel.UpdateMessage) (*apimodel.Result, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return apimodel.CreateFailureResult(err)
	}

	messageId := input.ID

	data := make(map[string]interface{})

	if input.Text != nil {
		data["Name"] = *input.Text
	}

	if len(data) > 0 {
		err = repo.UpdateMessage(ctx, messageId, data)
		if err != nil {
			return nil, err
		}
	}

	return apimodel.CreateSuccessResult()
}

func (r *mutationResolver) DeleteMessage(ctx context.Context, messageId int) (*apimodel.Result, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	err = repo.DeleteChat(messageId)
	if err != nil {
		return nil, err
	}

	return apimodel.CreateSuccessResult()
}

func (r *postResolver) Chat(ctx context.Context, post *apimodel.Post) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatByPostId(post.ID)
	if err != nil {
		return nil, err
	}

	return convertChat(chat), nil
}

func (r *resourceResolver) Chat(ctx context.Context, resource *apimodel.Resource) (*apimodel.Chat, error) {
	repo, err := sql.CreateChatRepo(r)
	if err != nil {
		return nil, err
	}

	chat, err := repo.GetChatByPostId(resource.ID)
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

	chat, err := repo.GetPrimaryChatByUserId(user.ID)
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

	messages, err := repo.GetMessagesByChatId(chat.ID)
	if err != nil {
		return nil, err
	}

	return convertMessages(messages), nil
}

func (r *mutationResolver) CreateReply(ctx context.Context, input apimodel.NewReply) (*apimodel.Reply, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) UpdateReply(ctx context.Context, input apimodel.UpdateReply) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *mutationResolver) DeleteReply(ctx context.Context, messageID int) (*apimodel.Result, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) MessagesByChatID(ctx context.Context, chatID int, filter apimodel.ResultsFilter) ([]apimodel.Message, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) RepliesByMessageID(ctx context.Context, messageID int, filter apimodel.ResultsFilter) ([]apimodel.Reply, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
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
		ID: int(message.ID),
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
		ID: int(chat.ID),
	}
}
