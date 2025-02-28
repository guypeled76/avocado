package sql

import (
	"github.com/gremlinsapps/avocado_server/dal/model"
	"log"
)

func AutoMigrate() {
	conn := Connect()

	log.Print("AutoMigrating db.")

	conn.db.AutoMigrate(
		&dalmodel.Hashtag{},
		&dalmodel.Notification{},
		&dalmodel.User{},
		&dalmodel.Clinic{},
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

	log.Print("Done AutoMigrating db.")
}
