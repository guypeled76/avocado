package sql

import (
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"sync"
)

type DBConnection struct {
	db *gorm.DB
}

type DBConnectionContainer interface {
	GetDBConnection() *DBConnection
}

var instance *DBConnection
var once sync.Once

func Connect() *DBConnection {
	once.Do(func() {
		db, err := gorm.Open("sqlite3", "test.db")
		if err != nil {
			panic("failed to connect database")
		}

		instance = &DBConnection{
			db,
		}
	})
	return instance
}

func (conn *DBConnection) Select(out interface{}, filter *apimodel.ResultsFilter) error {
	db := conn.db.Model(out)
	db, err := Filter(db, filter)
	if err != nil {
		return err
	}
	db.Find(out)
	return nil
}

func (conn *DBConnection) Close() {
	conn.db.Close()
}
