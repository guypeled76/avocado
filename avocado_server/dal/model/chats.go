package dalmodel

import "github.com/jinzhu/gorm"

type Chat struct {
	gorm.Model
	OwnerModel
	Hashtags []Hashtag
	Messages []Message
}

type Message struct {
	gorm.Model
	OwnerModel
	text  string
	video Video
	image Image
}
