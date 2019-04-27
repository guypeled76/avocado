package main

import (
	"github.com/gremlinsapps/avocado_server/api"
	"github.com/gremlinsapps/avocado_server/api/auth"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
	"github.com/gremlinsapps/avocado_server/api/graph"
)

const defaultPort = "8090"

func main() {

	sql.AutoMigrate()

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	authManager := auth.NewAuthManager()

	queryHandler := http.HandlerFunc(handler.Playground("Avocado", "/query"))
	rootHandler := http.HandlerFunc(handler.GraphQL(graph.NewExecutableSchema(api.NewRootResolvers())))

	http.Handle("/", authManager.AuthHandler(queryHandler))
	http.Handle("/query", rootHandler)
	http.Handle("/callback", http.HandlerFunc(authManager.CallbackHandler))
	http.Handle("/logout", http.HandlerFunc(authManager.LogoutHandler))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
