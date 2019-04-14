package sql

import (
	"github.com/gremlinsapps/avocado_server/dal/model"
)

func AutoMigrate() {
	conn := Connect()
	defer conn.Close()
	conn.db.AutoMigrate(
		&dalmodel.HashTag{},
		&dalmodel.Notification{},
		&dalmodel.Profile{},
		&dalmodel.User{},
		&dalmodel.Clinic{},
		&dalmodel.Video{},
		&dalmodel.Image{},
		&dalmodel.Chat{},
		&dalmodel.Message{},
	)
}
