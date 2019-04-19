package dalmodel

import "github.com/jinzhu/gorm"

type Notification struct {
	gorm.Model
	UserID uint
	text   string
}
