package usda

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"github.com/google/go-querystring/query"
	"net/http"
	"net/url"
)

type Repository struct {
	baseURL    *url.URL
	apiKey     string
	httpClient *http.Client
}

func CreateUSDARepository(httpClient *http.Client) (*Repository, error) {
	if httpClient == nil {
		httpClient = http.DefaultClient
	}

	baseURL, err := url.Parse("https://api.nal.usda.gov/ndb/")
	if err != nil {
		return nil, err
	}
	return &Repository{
		baseURL:    baseURL,
		httpClient: httpClient,
		apiKey:     "8bVnDeZfZLJx6I51EK8CGggyP7bclFZdDRkceVZJ",
	}, nil
}

func (r *Repository) createRequest(pathAPI string, data interface{}) (*http.Request, error) {

	finalPathURL := r.baseURL.String() + pathAPI
	buffer := bytes.NewBuffer([]byte{})
	err := json.NewEncoder(buffer).Encode(data)
	if err != nil {
		return nil, err
	}

	request, err := http.NewRequest(http.MethodPost, finalPathURL, buffer)
	if err != nil {
		return nil, err
	}

	request.Header.Set("Content-Type", "application/json")
	return request, err
}

func (r *Repository) sendRequest(ctx context.Context, request *http.Request, body interface{}) (*http.Response, error) {

	request = request.WithContext(ctx)

	response, err := r.httpClient.Do(request)
	if err != nil {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
			return nil, err
		}
		fmt.Println(err)
	}

	defer response.Body.Close()
	err = json.NewDecoder(response.Body).Decode(body)
	return response, err
}

func generateQuery(path string, options *QueryOptions) (string, error) {

	if options == nil {
		return path, nil
	}

	values, err := query.Values(options)
	if err != nil {
		return path, err
	}

	url, err := url.Parse(path)
	if err != nil {
		return path, err
	}

	url.RawQuery = values.Encode()
	return url.String(), nil
}

func (r *Repository) GetList(ctx context.Context, params *ListParams, options *QueryOptions) (ListResults, error) {

	var results ListResults

	query, err := generateQuery("list", options)
	if err != nil {
		return results, err
	}

	request, err := r.createRequest(query, params)
	if err != nil {
		return results, err
	}

	_, err = r.sendRequest(ctx, request, &results)

	return results, err
}

func (r *Repository) GetNutrientReport(ctx context.Context, params *NutrientsParams, options *QueryOptions) (NutrientReport, error) {

	var nutrientReport NutrientReport

	query, err := generateQuery("nutrients", options)
	if err != nil {
		return nutrientReport, err
	}

	request, err := r.createRequest(query, params)
	if err != nil {
		return nutrientReport, err
	}

	_, err = r.sendRequest(ctx, request, &nutrientReport)

	return nutrientReport, err
}

func (r *Repository) GetFoodsReport(ctx context.Context, params *FoodsParams) (FoodsReport, error) {

	var foodsReport FoodsReport

	request, err := r.createRequest("V2/reports", params)
	if err != nil {
		return foodsReport, err
	}

	_, err = r.sendRequest(ctx, request, &foodsReport)

	return foodsReport, err
}

func (r *Repository) Search(ctx context.Context, params *SearchParams, options *QueryOptions) (SearchResults, error) {

	var results SearchResults

	query, err := generateQuery("search", options)
	if err != nil {
		return results, err
	}

	request, err := r.createRequest(query, params)
	if err != nil {
		return results, err
	}

	_, err = r.sendRequest(ctx, request, &results)

	return results, err
}

func (r *Repository) SearchByName(ctx context.Context, name string) (SearchResults, error) {
	params := &SearchParams{SearchString: name}
	options := &QueryOptions{Max: 100, Offset: 0, Sort: "n"}
	return r.Search(ctx, params, options)
}

func (r *Repository) GetListByType(ctx context.Context, listType string) (ListResults, error) {
	params := &ListParams{Lt: listType}
	options := &QueryOptions{Max: 1500, Offset: 0, Sort: "id"}
	return r.GetList(ctx, params, options)
}

func (r *Repository) GetNutrientsReport(ctx context.Context) (NutrientReport, error) {
	params := &NutrientsParams{Fg: []string{"0300"}, NutrientsID: []string{"306", "204"}}
	options := &QueryOptions{Max: 10, Offset: 0, Sort: "r"}
	return r.GetNutrientReport(ctx, params, options)
}

func (r *Repository) GetFoodNutrientsReport(ctx context.Context, ndbno string) (NutrientReport, error) {
	params := &NutrientsParams{NutrientsID: []string{"306", "204"}, Ndbno: ndbno}
	options := &QueryOptions{Max: 100, Offset: 0, Sort: "r"}
	return r.GetNutrientReport(ctx, params, options)
}

func (r *Repository) GetBasicFoodReport(ctx context.Context, ndbno string) (FoodsReport, error) {
	params := &FoodsParams{Ndbno: []string{ndbno}, Type: "b"}
	return r.GetFoodsReport(ctx, params)
}
