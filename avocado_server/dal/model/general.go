package dalmodel

import (
	"github.com/jinzhu/gorm"
)

type HashTag struct {
	gorm.Model
	OwnerModel
	Name string `gorm:"not null;unique_index"`
}

type OwnerModel struct {
	Clinic   Clinic
	CreateBy User
}
