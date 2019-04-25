package dalmodel

import "github.com/jinzhu/gorm"

type Resource struct {
	gorm.Model
	AuditModel
	Name     string    `gorm:"not null;unique_index"`
	Hashtags []Hashtag `gorm:"many2many:resource_hashtags;"`
}
