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
	Hashtags      []HashTag
	Notifications []Notification
	Profile       Profile
}

type Profile struct {
	gorm.Model
}
