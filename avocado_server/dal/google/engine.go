package google

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
)

type Engine struct {
	HTML string `json:"html"`
	URL  string `json:"url"`
}

func Search(ctx context.Context, search string) (*Engine, error) {

	engine := &Engine{
		URL: fmt.Sprintf("http://www.google.com/search?q=%s", url.QueryEscape(search)),
	}

	response, err := http.Get(engine.URL)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()

	htmlBytes, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}

	engine.HTML = string(htmlBytes)

	return engine, nil
}
