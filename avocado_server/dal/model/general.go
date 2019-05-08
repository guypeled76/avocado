package dalmodel

import (
	"context"
	"github.com/gremlinsapps/avocado_server/session"
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

func CreateAuditModel(ctx context.Context) (*AuditModel, error) {

	uid, err := session.GetUserId(ctx)
	if err != nil {
		return nil, err
	}

	return &AuditModel{
		CreatedByID: uid,
		UpdatedByID: uid,
	}, nil
}

func UpdateAuditModel(ctx context.Context, data map[string]interface{}) error {

	if data == nil {
		return nil
	}

	uid, err := session.GetUserId(ctx)
	if err != nil {
		return err
	}

	data["UpdatedByID"] = uid
	return nil
}
