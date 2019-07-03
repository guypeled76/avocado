package sqlconnector

import (
	"database/sql"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"os"
)

func connectLocalSql() (*gorm.DB, error) {
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")

	log.Printf("Connecting to database at '%s:[PASSWORD]@tcp(%s)/avocado?parseTime=true'.", user, host)

	connection := fmt.Sprintf("%s:%s@tcp(%s)/avocado?parseTime=true", user, password, host)

	db, err := sql.Open("mysql", connection)
	if err != nil {
		return nil, err
	}

	return gorm.Open("mysql", db)

}
