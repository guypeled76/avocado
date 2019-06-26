package config

import (
	"fmt"
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

const defaultHost = "http"

func GetHost() string {
	host := os.Getenv("HOST")
	if host == "" {
		host = defaultHost
	}
	return host
}

func GetBaseUrl() string {
	return fmt.Sprintf("%s://%s:%s/", GetSchema(), GetHost(), GetPort())
}
