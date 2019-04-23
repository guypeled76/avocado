package dalmodel

import "github.com/jinzhu/gorm"

type Video struct {
	gorm.Model
	Text     string
	Hashtags []Hashtag `gorm:"many2many:video_hashtags;"`
}
