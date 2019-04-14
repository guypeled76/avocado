package dalmodel

import "github.com/jinzhu/gorm"

type HashTag struct {
	gorm.Model
	OwnerModel
	Name string
}

type OwnerModel struct {
	Clinic   Clinic
	CreateBy User
}
