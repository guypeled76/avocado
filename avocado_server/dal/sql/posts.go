package sql

import (
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/jinzhu/gorm"
)

func createFromPostId(uid int) *dalmodel.Post {
	return &dalmodel.Post{Model: gorm.Model{ID: uint(uid)}}
}
