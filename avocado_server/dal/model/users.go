package dalmodel

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Name          string
	DisplayName   string
	Email         string
	Hashtags      []Hashtag      `gorm:"many2many:user_hashtags;"`
	Notifications []Notification `gorm:"foreignkey:UserID`
	Measurements  []Measurement  `gorm:"foreignkey:UserID"`
	Thumbnail     string
	Image         string
	Video         string
}
