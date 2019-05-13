package usda

import (
	"context"
	"testing"
)

func TestRepository_SearchByName(t *testing.T) {

	ctx := context.Background()

	repo, err := CreateRepository(nil)
	if err != nil {
		t.Error(err)
	}

	results, err := repo.SearchByName(ctx, "Broccoli")
	if err != nil {
		t.Error(err)
	}

	t.Logf("found %d items", results.List.Total)

	items := results.List.Item
	if items == nil {
		t.Error("failed to get items")
	}

}

func TestRepository_GetFoodsReport(t *testing.T) {
	ndbno := "11096"
	ctx := context.Background()

	repo, err := CreateRepository(nil)
	if err != nil {
		t.Error(err)
	}

	result, err := repo.GetFoodNutrientsReport(ctx, ndbno)
	if err != nil {
		t.Error(err)
	}

	report := result.Report
	if report.Foods == nil {
		t.Error("failed to get foods")
	}

	t.Logf("found %d items", len(report.Foods))

}
