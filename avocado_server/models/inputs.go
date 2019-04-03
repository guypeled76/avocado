// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

import (
	"fmt"
	"io"
	"strconv"
	"time"
)

type Chat struct {
	ID        string    `json:"id"`
	CreatedAt time.Time `json:"createdAt"`
	Messages  []Message `json:"messages"`
}

type Clinic struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type DeleteImage struct {
	ID string `json:"id"`
}

type DeleteIngredient struct {
	ID string `json:"id"`
}

type DeleteMeal struct {
	ID string `json:"id"`
}

type DeleteMessage struct {
	Chat    string `json:"chat"`
	Message string `json:"message"`
}

type DeletePost struct {
	ID string `json:"id"`
}

type DeleteRecipe struct {
	ID string `json:"id"`
}

type DeleteVideo struct {
	ID string `json:"id"`
}

type DeleteWaterfall struct {
	ID string `json:"id"`
}

type Image struct {
	ID        string     `json:"id"`
	Hashtags  []string   `json:"hashtags"`
	Image     string     `json:"image"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type Ingredient struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Hashtags  []string   `json:"hashtags"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type Meal struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Hashtags  []string   `json:"hashtags"`
	Recipes   []Recipe   `json:"recipes"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type Message struct {
	ID        string     `json:"id"`
	Message   string     `json:"message"`
	CreatedBy string     `json:"createdBy"`
	CreateAt  time.Time  `json:"createAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type NewImage struct {
	Image    string   `json:"image"`
	Hashtags []string `json:"hashtags"`
}

type NewIngredient struct {
	Name     string   `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type NewMeal struct {
	Name     string   `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type NewMessage struct {
	Chat    string `json:"chat"`
	Message string `json:"message"`
}

type NewPost struct {
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type NewRecipe struct {
	Name     string   `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type NewVideo struct {
	Video     string     `json:"video"`
	Hashtags  []string   `json:"hashtags"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type NewWaterfall struct {
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type Notification struct {
	ID        string    `json:"id"`
	Text      string    `json:"text"`
	Reference Reference `json:"reference"`
}

type Post struct {
	ID        string     `json:"id"`
	Text      string     `json:"text"`
	Hashtags  []string   `json:"hashtags"`
	Chat      Chat       `json:"chat"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type Profile struct {
	ID string `json:"id"`
}

type Recipe struct {
	ID          string       `json:"id"`
	Name        string       `json:"name"`
	Hashtags    []string     `json:"hashtags"`
	Ingredients []Ingredient `json:"ingredients"`
	CreatedBy   string       `json:"createdBy"`
	CreatedAt   time.Time    `json:"createdAt"`
	DeletedAt   *time.Time   `json:"deletedAt"`
}

type Reference struct {
	ID   string        `json:"id"`
	Type ReferenceType `json:"type"`
}

type Result struct {
	Status ResultStatus `json:"status"`
}

type UpdateImage struct {
	ID       string   `json:"id"`
	Image    string   `json:"image"`
	Hashtags []string `json:"hashtags"`
}

type UpdateImageHashTags struct {
	ID       string   `json:"id"`
	Hashtags []string `json:"hashtags"`
}

type UpdateIngredient struct {
	ID       string   `json:"id"`
	Name     *string  `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type UpdateMeal struct {
	ID       string   `json:"id"`
	Name     *string  `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type UpdateMessage struct {
	Message *string `json:"message"`
}

type UpdatePost struct {
	ID       string   `json:"id"`
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type UpdateRecipe struct {
	ID       string   `json:"id"`
	Name     *string  `json:"name"`
	Hashtags []string `json:"hashtags"`
}

type UpdateVideo struct {
	ID       string   `json:"id"`
	Video    string   `json:"video"`
	Hashtags []string `json:"hashtags"`
}

type UpdateVideoHashTags struct {
	ID       string   `json:"id"`
	Hashtags []string `json:"hashtags"`
}

type UpdateWaterfall struct {
	ID       string   `json:"id"`
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type User struct {
	ID            string         `json:"id"`
	Name          string         `json:"name"`
	Email         string         `json:"email"`
	Image         string         `json:"image"`
	Hashtags      []string       `json:"hashtags"`
	Notifications []Notification `json:"notifications"`
	Profile       Profile        `json:"profile"`
}

type Video struct {
	ID       string   `json:"id"`
	Hashtags []string `json:"hashtags"`
	Video    string   `json:"video"`
}

type Waterfall struct {
	ID        string     `json:"id"`
	Text      string     `json:"text"`
	Hashtags  []string   `json:"hashtags"`
	CreatedBy string     `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type ReferenceType string

const (
	ReferenceTypePost    ReferenceType = "POST"
	ReferenceTypeMessage ReferenceType = "MESSAGE"
)

var AllReferenceType = []ReferenceType{
	ReferenceTypePost,
	ReferenceTypeMessage,
}

func (e ReferenceType) IsValid() bool {
	switch e {
	case ReferenceTypePost, ReferenceTypeMessage:
		return true
	}
	return false
}

func (e ReferenceType) String() string {
	return string(e)
}

func (e *ReferenceType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ReferenceType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ReferenceType", str)
	}
	return nil
}

func (e ReferenceType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type ResultStatus string

const (
	ResultStatusFailure ResultStatus = "FAILURE"
	ResultStatusSuccess ResultStatus = "SUCCESS"
)

var AllResultStatus = []ResultStatus{
	ResultStatusFailure,
	ResultStatusSuccess,
}

func (e ResultStatus) IsValid() bool {
	switch e {
	case ResultStatusFailure, ResultStatusSuccess:
		return true
	}
	return false
}

func (e ResultStatus) String() string {
	return string(e)
}

func (e *ResultStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ResultStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ResultStatus", str)
	}
	return nil
}

func (e ResultStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
