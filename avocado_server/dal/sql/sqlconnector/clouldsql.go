package sqlconnector

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"log"
	"os"
)

func connectCloudSql() (*gorm.DB, error) {
	connectionName := os.Getenv("CLOUDSQL_CONNECTION_NAME")
	if len(connectionName) == 0 {
		return nil, nil
	}

	user := os.Getenv("CLOUDSQL_USER")
	password := os.Getenv("CLOUDSQL_PASSWORD")
	socket := os.Getenv("CLOUDSQL_SOCKET")

	if len(socket) == 0 {
		socket = "/cloudsql"
	}

	log.Printf("Connecting to database at '%s:[PASSWORD]@unix(%s%s/)/avocado?parseTime=true'.", user, socket, connectionName)

	connection := fmt.Sprintf("%s:%s@unix(%s/%s)/avocado?parseTime=true", user, password, socket, connectionName)

	db, err := sql.Open("mysql", connection)
	if err != nil {
		return nil, err
	}

	return gorm.Open("mysql", db)
}
