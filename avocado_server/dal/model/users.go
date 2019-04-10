package dalmodel

import (
	"github.com/jinzhu/gorm"
)

type HashTag struct {
	gorm.Model
	Name string
}

type User struct {
	gorm.Model
	Name          string
	Email         string
	Image         string
	Hashtags      []HashTag
	Notifications []Notification
	Profile       Profile
}

type Profile struct {
	gorm.Model
}

type Notification struct {
	gorm.Model
	Text string
}
