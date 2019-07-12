package main

import (
	"github.com/99designs/gqlgen/handler"
	"github.com/gremlinsapps/avocado_server/api"
	"github.com/gremlinsapps/avocado_server/api/graph"
	"github.com/gremlinsapps/avocado_server/auth"
	"github.com/gremlinsapps/avocado_server/config"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"log"
	"net/http"
)

func main() {

	sql.AutoMigrate()

	authManager := auth.NewAuthManager()

	queryHandler := http.HandlerFunc(handler.Playground("Avocado", "/query"))
	rootHandler := http.HandlerFunc(handler.GraphQL(graph.NewExecutableSchema(api.NewRootResolvers())))

	http.Handle("/", authManager.AuthHandler(queryHandler))
	http.Handle("/query", authManager.AuthHandler(rootHandler))
	http.Handle("/callback", http.HandlerFunc(authManager.CallbackHandler))
	http.Handle("/logout", http.HandlerFunc(authManager.LogoutHandler))
	http.Handle("/login", http.HandlerFunc(authManager.LogoutHandler))

	port := config.GetPort()
	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
