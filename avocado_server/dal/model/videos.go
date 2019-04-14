package dalmodel

import "github.com/jinzhu/gorm"

type Video struct {
	gorm.Model
	OwnerModel
	Text     string
	Hashtags []HashTag
}
