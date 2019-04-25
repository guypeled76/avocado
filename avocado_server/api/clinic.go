package api

import (
	"context"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/gremlinsapps/avocado_server/helpers"
)

func (r *queryResolver) Clinics(ctx context.Context) ([]apimodel.Clinic, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}

func (r *queryResolver) ClinicByID(ctx context.Context, clinicID int) (*apimodel.Clinic, error) {
	helpers.NotImplementedPanic()
	panic("implement me")
}
