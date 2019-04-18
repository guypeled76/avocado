package dalmodel

import (
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Name          string
	DisplayName   string
	Email         string
	Image         string
	Clinic        Clinic
	Hashtags      []Hashtag `gorm:"many2many:user_hashtags;"`
	Notifications []Notification
	Profile       Profile
}

type Profile struct {
	gorm.Model
}
