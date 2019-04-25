package sql

import (
	"github.com/gremlinsapps/avocado_server/dal/model"
)

func AutoMigrate() {
	conn := Connect()
	//defer conn.Close()
	conn.db.AutoMigrate(
		&dalmodel.Hashtag{},
		&dalmodel.Notification{},
		&dalmodel.Profile{},
		&dalmodel.User{},
		&dalmodel.Clinic{},
		&dalmodel.Video{},
		&dalmodel.Image{},
		&dalmodel.Chat{},
		&dalmodel.Message{},
		&dalmodel.Measurement{},
		&dalmodel.MeasurementResult{},
		&dalmodel.Ingredient{},
		&dalmodel.Recipe{},
		&dalmodel.Portion{},
		&dalmodel.PortionType{},
		&dalmodel.Reply{},
		&dalmodel.Post{},
		&dalmodel.Resource{},
	)
}
