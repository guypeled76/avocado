package auth

import (
	"encoding/json"
	"fmt"
	"github.com/gremlinsapps/avocado_server/dal/model"
	"github.com/gremlinsapps/avocado_server/dal/sql"
	"golang.org/x/oauth2"
	"io/ioutil"
	"net/http"
)

func (m *Manager) getUserFromGoogleCallback(w http.ResponseWriter, r *http.Request) (*dalmodel.User, error) {

	if r.FormValue("state") != m.authState {
		return nil, fmt.Errorf("invalid oauth state")
	}

	token, err := m.authConfig.Exchange(oauth2.NoContext, r.FormValue("code"))
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
	err = json.Unmarshal(contents, user)
	if err != nil {
		return nil, fmt.Errorf("failed getting google user: %s", err.Error())
	}

	repo, err := sql.CreateUserRepo(m)
	if err != nil {
		return nil, fmt.Errorf("failed getting user repo: %s", err.Error())
	}

	dbuser := &dalmodel.User{
		Email:       user.Email,
		Thumbnail:   user.Picture,
		Image:       user.Picture,
		Name:        user.Name,
		DisplayName: user.GivenName,
	}

	return repo.GetOrCreateUserByEmail(dbuser)
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
