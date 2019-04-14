package dalmodel

import "github.com/jinzhu/gorm"

type Notification struct {
	gorm.Model
	OwnerModel
	text string
}
