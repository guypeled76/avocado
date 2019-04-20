package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

type ChatRepository struct {
	conn *DBConnection
}

func CreateChatRepo(container DBConnectionContainer) (*ChatRepository, error) {
	conn, err := container.GetDBConnection()
	if err != nil {
		return nil, err
	}
	return &ChatRepository{conn}, nil
}

func (repo *ChatRepository) GetTextColumn() string {
	return "name"
}

func (repo *ChatRepository) GetBaseName() string {
	return "chat"
}

func (repo *ChatRepository) GetChats(filter *apimodel.ResultsFilter) ([]dalmodel.Chat, error) {
	chats := make([]dalmodel.Chat, 0)
	err := repo.conn.Select(&chats, filter, repo)
	return chats, err
}

func (repo *ChatRepository) CreateChat(chat *dalmodel.Chat) (*dalmodel.Chat, error) {
	err := repo.conn.Create(chat)
	if err != nil {
		return nil, err
	}
	return chat, nil
}

func (repo *ChatRepository) DeleteChat(chatId uint) error {
	hashtag := dalmodel.Chat{Model: gorm.Model{ID: chatId}}
	err := repo.conn.Delete(&hashtag)
	return err
}

func (repo *ChatRepository) GetChatById(chatId uint) (*dalmodel.Chat, error) {
	chat := dalmodel.Chat{Model: gorm.Model{ID: chatId}}
	err := repo.conn.Get(&chat)
	return &chat, err
}

func (repo *ChatRepository) GetMessagesByChatId(chatId uint) ([]dalmodel.Message, error) {
	// TODO
	return []dalmodel.Message{}, nil
}

func (repo *ChatRepository) GetChatByPostId(postId uint) (*dalmodel.Chat, error) {
	// TODO
	chat := dalmodel.Chat{Model: gorm.Model{ID: postId}}
	err := repo.conn.Get(&chat)
	return &chat, err
}

func (repo *ChatRepository) GetPrimaryChatByUserId(userId uint) (*dalmodel.Chat, error) {
	// TODO
	chat := dalmodel.Chat{Model: gorm.Model{ID: userId}}
	err := repo.conn.Get(&chat)
	return &chat, err
}

func (repo *ChatRepository) GetChatsByUserId(userId uint) ([]dalmodel.Chat, error) {
	// TODO
	return []dalmodel.Chat{}, nil
}

func (repo *ChatRepository) CreateMessage(message *dalmodel.Message) (*dalmodel.Message, error) {
	err := repo.conn.Create(message)
	if err != nil {
		return nil, err
	}
	return message, nil
}

func (repo *ChatRepository) UpdateMessage(messageId uint, data map[string]interface{}) error {
	message := dalmodel.Message{Model: gorm.Model{ID: messageId}}
	return repo.conn.Update(&message, data)
}
