package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
)

func (r *queryResolver) Clinics(ctx context.Context) ([]apimodel.Clinic, error) {
	panic("implement me")
}

func (r *queryResolver) ClinicByID(ctx context.Context, clinicID string) (*apimodel.Clinic, error) {
	panic("implement me")
}
