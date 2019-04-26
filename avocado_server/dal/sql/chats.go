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

func (repo *ChatRepository) DeleteChat(id int) error {
	chat := createFromChatId(id)
	err := repo.conn.Delete(&chat)
	return err
}

func (repo *ChatRepository) GetChatById(id int) (*dalmodel.Chat, error) {
	chat := createFromChatId(id)
	err := repo.conn.Get(chat)
	return chat, err
}

func (repo *ChatRepository) GetMessagesByChatId(id int) ([]dalmodel.Message, error) {
	// TODO
	return []dalmodel.Message{}, nil
}

func (repo *ChatRepository) GetChatByPostId(id int) (*dalmodel.Chat, error) {
	// TODO
	chat := createFromChatId(id)
	err := repo.conn.Get(chat)
	return chat, err
}

func (repo *ChatRepository) GetChatByResourceId(id int) (*dalmodel.Chat, error) {
	// TODO
	chat := createFromChatId(id)
	err := repo.conn.Get(chat)
	return chat, err
}

func (repo *ChatRepository) GetPrimaryChatByUserId(id int) (*dalmodel.Chat, error) {
	// TODO
	chat := createFromChatId(id)
	err := repo.conn.Get(chat)
	return chat, err
}

func (repo *ChatRepository) GetChatsByUserId(id int) ([]dalmodel.Chat, error) {
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

func (repo *ChatRepository) UpdateMessage(id int, data map[string]interface{}) error {
	return repo.conn.Update(createFromMessageId(id), data)
}

func createFromMessageId(id int) *dalmodel.Message {
	return &dalmodel.Message{Model: gorm.Model{ID: uint(id)}}
}

func createFromChatId(id int) *dalmodel.Chat {
	return &dalmodel.Chat{Model: gorm.Model{ID: uint(id)}}
}
