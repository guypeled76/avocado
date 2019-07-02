package sql

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"os"
)

func generateCloudSqlConnection() (*gorm.DB, error) {
	connectionName := os.Getenv("CLOUDSQL_CONNECTION_NAME")
	if len(connectionName) == 0 {
		return nil, nil
	}

	user := os.Getenv("CLOUDSQL_USER")
	password := os.Getenv("CLOUDSQL_PASSWORD")

	log.Printf("Connecting to database at '%s:[PASSWORD]@cloudsql(%s)/avocado?parseTime=true'.", user, connectionName)

	connection := fmt.Sprintf("%s:%s@cloudsql(%s)/avocado?parseTime=true", user, password, connectionName)

	db, err := sql.Open("mysql", connection)
	if err != nil {
		return nil, err
	}

	return gorm.Open("mysql", db)
}
