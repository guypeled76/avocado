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
	hashtags := make([]dalmodel.Chat, 0)
	err := repo.conn.Select(&hashtags, filter, repo)
	return hashtags, err
}

func (repo *ChatRepository) CreateChat(input apimodel.NewChat) (*dalmodel.Chat, error) {
	hashtag := dalmodel.Chat{}
	err := repo.conn.Create(&hashtag)
	if err != nil {
		return nil, err
	}
	return &hashtag, nil
}

func (repo *ChatRepository) DeleteChat(ID uint) error {
	hashtag := dalmodel.Chat{Model: gorm.Model{ID: ID}}
	err := repo.conn.Delete(&hashtag)
	return err
}
