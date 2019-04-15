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
	GetDBConnection() (*DBConnection, error)
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

func (conn *DBConnection) Select(out interface{}, filter *apimodel.ResultsFilter, repo Repository) error {
	db := conn.db.Model(out)
	db, err := Filter(db, filter, repo)
	if err != nil {
		return err
	}
	return db.Find(out).Error
}

func (conn *DBConnection) Delete(in interface{}) error {
	return conn.db.Delete(in).Error
}

func (conn *DBConnection) Create(out interface{}) error {
	return conn.db.Create(out).Error
}

func (conn *DBConnection) Close() {
	conn.db.Close()
}
