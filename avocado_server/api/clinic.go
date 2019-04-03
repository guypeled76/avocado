package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/models"
)

func (r *queryResolver) Clinics(ctx context.Context) ([]models.Clinic, error) {
	panic("implement me")
}

func (r *queryResolver) ClinicByID(ctx context.Context, clinicID string) (*models.Clinic, error) {
	panic("implement me")
}
