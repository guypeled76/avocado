package dalmodel

import "github.com/jinzhu/gorm"

type Image struct {
	gorm.Model
	Text     string
	Hashtags []Hashtag `gorm:"many2many:image _hashtags;"`
}
