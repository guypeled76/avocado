package auth

import (
	"errors"
	"fmt"
	"github.com/dchest/uniuri"
	"github.com/gremlinsapps/avocado_server/config"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"github.com/gremlinsapps/avocado_server/session"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"net/http"
)

type Manager struct {
	authConfig *oauth2.Config
	authState  string
	conn       *sql.DBConnection
	secret     []byte
}

func NewAuthManager() *Manager {
	return &Manager{
		authState: uniuri.New(),
		conn:      sql.Connect(),
		secret:    []byte("thisishash"),
	}
}

func (m *Manager) GetDBConnection() (*sql.DBConnection, error) {
	db := m.conn
	if db == nil {
		return nil, errors.New("DB connection was not initialized")
	}
	return db, nil
}

func (m *Manager) AuthHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requestWithSession, err := createRequestWithSession(r, m.secret)
		if err == nil && requestWithSession != nil {
			next.ServeHTTP(w, requestWithSession)
		} else {
			m.redirectToLogin(w, r)
		}

	})
}

func (m *Manager) LogoutHandler(w http.ResponseWriter, r *http.Request) {
	clearSessionCookie(w)
	http.Redirect(w, r, config.GetBaseUrl(r), http.StatusTemporaryRedirect)
}

func (m *Manager) CallbackHandler(w http.ResponseWriter, r *http.Request) {

	user, err := m.getUserFromGoogleCallback(w, r)
	if err != nil {
		panic(err)
	}

	session := &session.Session{
		ID:    int(user.ID),
		Email: user.Email,
	}

	writeSessionToCookie(session, w, m.secret)

	http.Redirect(w, r, config.GetBaseUrl(r), http.StatusTemporaryRedirect)
}

func (m *Manager) redirectToLogin(w http.ResponseWriter, r *http.Request) {

	if m.authConfig == nil {
		m.authConfig = &oauth2.Config{
			RedirectURL:  fmt.Sprintf("%s/callback", config.GetBaseUrl(r)),
			ClientID:     "219538454820-f5a7vff8sfq7unr1ssv4q0mh079cjk19.apps.googleusercontent.com",
			ClientSecret: "gL2EN9ayp8t6NqRDc1ACiBxu",
			Scopes: []string{
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/userinfo.email"},
			Endpoint: google.Endpoint,
		}
	}

	url := m.authConfig.AuthCodeURL(m.authState)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}
