package dalmodel

import "github.com/jinzhu/gorm"

type Image struct {
	gorm.Model
	OwnerModel
	Text     string
	Hashtags []HashTag
}
