package sql

import (
	"context"
	"errors"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/session"
	"github.com/jinzhu/gorm"
	"reflect"
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
		db, err := generateConnection()
		if err != nil {
			panic(fmt.Sprintf("failed to connect database:%s", err.Error()))
		}

		instance = &DBConnection{
			db,
		}
	})
	return instance
}

func generateConnection() (*gorm.DB, error) {

	db, err := generateCloudSqlConnection()
	if err != nil {
		return nil, err
	}

	if db != nil {
		return db, nil
	}

	return generateLocalConnection()
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

func (conn *DBConnection) Create(ctx context.Context, out interface{}) error {

	if out == nil {
		return errors.New("ddd")
	}

	value := reflect.ValueOf(out).Elem()
	createdByID := value.FieldByName("CreatedByID")
	updatedByID := value.FieldByName("UpdatedByID")
	if createdByID.IsValid() || updatedByID.IsValid() {
		uid, err := session.GetUserId(ctx)
		if err != nil {
			return err
		}

		if createdByID.IsValid() {
			createdByID.Set(reflect.ValueOf(uid))
		}

		if updatedByID.IsValid() {
			updatedByID.Set(reflect.ValueOf(uid))
		}
	}

	return conn.db.Create(out).Error
}

func (conn *DBConnection) Close() {
	conn.db.Close()
}

func (conn *DBConnection) Update(ctx context.Context, in interface{}, data map[string]interface{}) error {

	value := reflect.ValueOf(in).Elem()

	updatedByID := value.FieldByName("UpdatedByID")
	if updatedByID.IsValid() {
		uid, err := session.GetUserId(ctx)
		if err != nil {
			return err
		}

		if updatedByID.IsValid() {
			data["UpdatedByID"] = uid
		}
	}

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
