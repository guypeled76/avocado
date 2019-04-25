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
	Hashtags      []Hashtag      `gorm:"many2many:user_hashtags;"`
	Notifications []Notification `gorm:"foreignkey:UserID`
	Measurements  []Measurement  `gorm:"foreignkey:UserID"`
	Profile       Profile
}

type Profile struct {
	gorm.Model
}
