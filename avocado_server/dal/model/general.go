package dalmodel

import (
	"github.com/jinzhu/gorm"
)

type Hashtag struct {
	gorm.Model
	AuditModel
	Name string `gorm:"not null;unique_index"`
}

type AuditModel struct {
	CreatedBy   User `gorm:"foreignkey:CreatedByID;association_foreignkey:ID"`
	CreatedByID int
	UpdatedBy   User `gorm:"foreignkey:UpdatedByID;association_foreignkey:ID"`
	UpdatedByID int
	DeletedBy   User `gorm:"foreignkey:DeletedByID;association_foreignkey:ID"`
	DeletedByID int
}

func CreateAuditModel(uid int) AuditModel {
	return AuditModel{
		CreatedByID: uid,
		UpdatedByID: uid,
	}
}
