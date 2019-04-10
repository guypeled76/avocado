package sql

import (
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func InitializeDB() {

	db, err := gorm.Open("sqlite3", "test.db")
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()

	// Migrate the schema
	autoMigrate(db)

	test1 := apimodel.HashTag{Name: "Test1_1"}
	test2 := apimodel.HashTag{Name: "Test2_1"}

	db.Create(&test1)
	db.Create(&test2)

	user := &apimodel.User{Name: "Guy2"}

	// Create
	db.Create(&user)

	db.Model(&user).Association("HashTags").Replace([]apimodel.HashTag{test1, test2})

	var users []apimodel.User
	if err := db.Find(&users).Error; err != nil {
		fmt.Printf(err.Error())
	}

	for _, user := range users {

		fmt.Print(user.Name)
	}
}

func autoMigrate(db *gorm.DB) {
	db.AutoMigrate(
		&apimodel.HashTag{},
		&apimodel.Notification{},
		&apimodel.Profile{},
		&apimodel.User{},
	)
}
