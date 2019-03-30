package dal

import (
	"context"
	"firebase.google.com/go"
	"github.com/gremlinsapps/avocado_server/models"
	"log"
)

type UserFirebaseRepository struct {
	FBApp   *firebase.App
	Context context.Context
}

func NewUserFirebaseRepository(fbAPP *firebase.App, ctx context.Context) (*UserFirebaseRepository, error) {
	return &UserFirebaseRepository{
		FBApp:   fbAPP,
		Context: ctx,
	}, nil
}

func (userRepo UserFirebaseRepository) GetAll() ([]models.User, error) {
	panic("YTI")
}

func (userRepo UserFirebaseRepository) GetByID(id string) (models.User, error) {
	client, err := userRepo.FBApp.Auth(userRepo.Context)
	if err != nil {
		log.Printf("error getting Auth client: %v\n", err)
	}

	u, err := client.GetUser(userRepo.Context, id)
	if err != nil {
		log.Printf("error getting user %s: %v\n", id, err)
	}
	log.Printf("Successfully fetched user data: %v\n", u)
	return models.User{ID: id, Name: u.DisplayName, Email: u.Email}, err
}
