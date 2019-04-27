package auth

import (
	"encoding/json"
	"fmt"
	"github.com/dchest/uniuri"
	"github.com/markbates/goth/providers/google"
	"golang.org/x/oauth2"
	"io/ioutil"
	"net/http"
	"time"
)

type AuthManager struct {
	authConfig *oauth2.Config
	authState  string
}

func NewAuthManager() *AuthManager {
	return &AuthManager{
		authConfig: &oauth2.Config{
			RedirectURL:  "http://localhost:8090/callback",
			ClientID:     "219538454820-f5a7vff8sfq7unr1ssv4q0mh079cjk19.apps.googleusercontent.com",
			ClientSecret: "gL2EN9ayp8t6NqRDc1ACiBxu",
			Scopes: []string{
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/userinfo.email"},
			Endpoint: google.Endpoint,
		},
		authState: uniuri.New(),
	}
}

func (m *AuthManager) AuthHandler(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		cookie, _ := r.Cookie("session_token")

		if cookie != nil && cookie.Value != "" {
			next.ServeHTTP(w, r)
		} else {
			url := m.authConfig.AuthCodeURL(m.authState)
			http.Redirect(w, r, url, http.StatusTemporaryRedirect)
		}

	})
}

func (m *AuthManager) LogoutHandler(w http.ResponseWriter, r *http.Request) {

	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    "",
		HttpOnly: true,
		Path:     "/",
	})

	http.Redirect(w, r, "http://localhost:8090/", http.StatusTemporaryRedirect)
}

func (m *AuthManager) CallbackHandler(w http.ResponseWriter, r *http.Request) {

	user, err := m.loginCallback(w, r)
	if err != nil {
		panic(err)
	}

	expire := time.Now().Add(60 * time.Minute)

	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    user.Email,
		Expires:  expire,
		HttpOnly: true,
		Path:     "/",
	})

	http.Redirect(w, r, "http://localhost:8090/", http.StatusTemporaryRedirect)
}

func (m *AuthManager) loginCallback(w http.ResponseWriter, r *http.Request) (*googleUser, error) {

	state := r.FormValue("state")
	if state != m.authState {
		return nil, fmt.Errorf("invalid oauth state")
	}

	code := r.FormValue("code")
	token, err := m.authConfig.Exchange(oauth2.NoContext, code)
	if err != nil {
		return nil, fmt.Errorf("code exchange failed: %s", err.Error())
	}
	response, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		return nil, fmt.Errorf("failed getting user info: %s", err.Error())
	}
	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, fmt.Errorf("failed reading response body: %s", err.Error())
	}

	user := &googleUser{}
	json.Unmarshal(contents, user)
	return user, nil
}

type googleUser struct {
	ID            string `json:"id"`
	Email         string `json:"email"`
	VerifiedEmail bool   `json:"verified_email"`
	Name          string `json:"name"`
	GivenName     string `json:"given_name"`
	FamilyName    string `json:"family_name"`
	Link          string `json:"link"`
	Picture       string `json:"picture"`
	Gender        string `json:"gender"`
	Locale        string `json:"locale"`
}
