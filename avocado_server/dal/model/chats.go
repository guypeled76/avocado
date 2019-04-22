package dalmodel

import "github.com/jinzhu/gorm"

type Chat struct {
	gorm.Model
	Hashtags []Hashtag `gorm:"many2many:chat_hashtags;"`
	Messages []Message `gorm:"many2many:chat_messages;"`
}

type Message struct {
	gorm.Model
	Text  string
	Reply []Reply `gorm:"many2many:message_replies;"`
}

type Reply struct {
	gorm.Model
	Text string
}
