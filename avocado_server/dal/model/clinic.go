package dalmodel

import "github.com/jinzhu/gorm"

type Clinic struct {
	gorm.Model
	name        string
	description string
}
