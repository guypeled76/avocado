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

func TestRepository_GetBasicFoodReport(t *testing.T) {
	ndbno := "11096"
	ctx := context.Background()

	repo, err := CreateRepository(nil)
	if err != nil {
		t.Error(err)
	}

	result, err := repo.GetBasicFoodReport(ctx, ndbno)
	if err != nil {
		t.Error(err)
	}

	foods := result.Foods
	if foods == nil {
		t.Error("failed to get foods")
	}

	t.Logf("found %d items", len(foods))

}
