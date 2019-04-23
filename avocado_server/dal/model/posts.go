package dalmodel

import "github.com/jinzhu/gorm"

type Post struct {
	gorm.Model
	Hashtags []Hashtag `gorm:"many2many:post_hashtags;"`
}
