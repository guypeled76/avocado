package auth

import (
	"context"
	"errors"
	"firebase.google.com/go"
	"fmt"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"net/http"
)

func (m *Manager) getOrCreateFirebaseApp() (*firebase.App, error) {
	app := m.firebaseApp
	if app != nil {
		return app, nil
	}

	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		return nil, fmt.Errorf("error initializing firebase app: %v", err)
	}

	m.firebaseApp = app

	return app, nil
}

func (m *Manager) getUserFromFirebaseIdToken(w http.ResponseWriter, r *http.Request) (*dalmodel.User, error) {

	idToken := r.FormValue("id_token")
	if len(idToken) == 0 {
		return nil, errors.New("invalid id_token value")
	}

	app, err := m.getOrCreateFirebaseApp()
	if err != nil {
		return nil, fmt.Errorf("error getting firebase app: %s", err)
	}

	client, err := app.Auth(context.Background())
	if err != nil {
		return nil, fmt.Errorf("error getting Auth client: %s", err)
	}

	ctx := r.Context()

	token, err := client.VerifyIDToken(ctx, idToken)
	if err != nil {
		return nil, fmt.Errorf("error verifying ID token: %s", err)
	}

	user, err := client.GetUser(ctx, token.UID)
	if err != nil {
		return nil, fmt.Errorf("error getting user %s: %s\n", user.UID, err)
	}

	repo, err := sql.CreateUserRepo(m)
	if err != nil {
		return nil, fmt.Errorf("failed getting user repo: %s", err.Error())
	}

	dbUser := &dalmodel.User{
		Email:       user.UserInfo.Email,
		Thumbnail:   user.UserInfo.PhotoURL,
		Image:       user.UserInfo.PhotoURL,
		Name:        user.UserInfo.DisplayName,
		DisplayName: user.UserInfo.DisplayName,
	}

	return repo.GetOrCreateUserByEmail(dbUser)
}
