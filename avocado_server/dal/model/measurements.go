package dalmodel

import "github.com/jinzhu/gorm"

type Measurement struct {
	gorm.Model
	Name         string
	Description  string
	UserID       uint
	Hashtags     []Hashtag           `gorm:"many2many:measurement_hashtags;"`
	Measurements []MeasurementResult `gorm:"foreignkey:MeasurementID"`
}

type MeasurementResult struct {
	gorm.Model
	MeasurementID uint
}
