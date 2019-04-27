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

func (conn *DBConnection) Get(out interface{}) error {
	db := conn.db.Model(out)
	return db.First(out).Error
}

func (conn *DBConnection) Find(ref interface{}) error {
	return conn.db.Where(ref).First(ref).Error
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

func (conn *DBConnection) Update(in interface{}, data map[string]interface{}) error {
	return conn.db.Model(in).Updates(data).Error
}

func (conn *DBConnection) UpdateAssociations(in interface{}, association string, values interface{}) error {
	return conn.db.Model(in).Association(association).Replace(values).Error
}

func (conn *DBConnection) GetAssociations(in interface{}, association string, out interface{}) error {
	return conn.db.Model(in).Association(association).Find(out).Error
}

func (conn *DBConnection) GetRelated(in interface{}, out interface{}, filter *apimodel.ResultsFilter, repo Repository) error {
	db, err := Filter(conn.db.Model(in), filter, repo)
	if err != nil {
		return err
	}
	return db.Related(out).Error
}
