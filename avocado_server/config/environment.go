package config

import (
	"fmt"
	"net/http"
	"os"
)

const defaultPort = "8090"

func GetPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	return port
}

const defaultSchema = "http"

func GetSchema() string {
	schema := os.Getenv("SCHEMA")
	if schema == "" {
		schema = defaultSchema
	}
	return schema
}

func GetBaseUrl(r *http.Request) string {
	return fmt.Sprintf("%s://%s/", GetSchema(), r.Host)
}
