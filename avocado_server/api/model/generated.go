// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package apimodel

import (
	"fmt"
	"io"
	"strconv"
	"time"
)

type MeasurementResult interface {
	IsMeasurementResult()
}

type WaterfallEvent interface {
	IsWaterfallEvent()
}

type Chat struct {
	ID        int        `json:"id"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy *User      `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
	Messages  []Message  `json:"messages"`
}

type Clinic struct {
	ID        int        `json:"id"`
	Name      string     `json:"name"`
	CreatedBy int        `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

type DeletePost struct {
	ID string `json:"id"`
}

type DeleteWaterfall struct {
	ID string `json:"id"`
}

type Hashtag struct {
	ID        int        `json:"id"`
	Name      string     `json:"name"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy *User      `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
}

type Ingredient struct {
	ID                 int        `json:"id"`
	Name               string     `json:"name"`
	Hashtags           []Hashtag  `json:"hashtags"`
	CreatedAt          time.Time  `json:"createdAt"`
	CreatedBy          User       `json:"createdBy"`
	DeletedAt          *time.Time `json:"deletedAt"`
	DeletedBy          *User      `json:"deletedBy"`
	UpdatedAt          time.Time  `json:"updatedAt"`
	UpdatedBy          User       `json:"updatedBy"`
	Portions           []Portion  `json:"portions"`
	Calories           *float64   `json:"calories"`
	TotalFat           *float64   `json:"totalFat"`
	SaturatedFat       *float64   `json:"saturatedFat"`
	MonounsaturatedFat *float64   `json:"monounsaturatedFat"`
	TransFat           *float64   `json:"transFat"`
	Cholesterol        *float64   `json:"cholesterol"`
	Sodium             *float64   `json:"sodium"`
	Potassium          *float64   `json:"potassium"`
	TotalCarbohydrate  *float64   `json:"totalCarbohydrate"`
	DietaryFiber       *float64   `json:"dietaryFiber"`
	Sugar              *float64   `json:"sugar"`
	Protein            *float64   `json:"protein"`
}

type Measurement struct {
	ID          int                 `json:"id"`
	Name        string              `json:"name"`
	Chat        Chat                `json:"chat"`
	Unit        MeasurementUnit     `json:"unit"`
	Description string              `json:"description"`
	Hashtags    []Hashtag           `json:"hashtags"`
	Results     []MeasurementResult `json:"results"`
	CreatedAt   time.Time           `json:"createdAt"`
	CreatedBy   *User               `json:"createdBy"`
	DeletedAt   *time.Time          `json:"deletedAt"`
	DeletedBy   *User               `json:"deletedBy"`
	UpdatedAt   time.Time           `json:"updatedAt"`
	UpdatedBy   *User               `json:"updatedBy"`
}

type Message struct {
	ID        int        `json:"id"`
	Text      string     `json:"text"`
	Resource  *Resource  `json:"resource"`
	Replies   []Reply    `json:"replies"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy *User      `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
}

type NewChat struct {
	Description *string `json:"description"`
}

type NewIngredient struct {
	Name               string   `json:"name"`
	Hashtags           []int    `json:"hashtags"`
	Calories           *float64 `json:"calories"`
	TotalFat           *float64 `json:"totalFat"`
	SaturatedFat       *float64 `json:"saturatedFat"`
	MonounsaturatedFat *float64 `json:"monounsaturatedFat"`
	TransFat           *float64 `json:"transFat"`
	Cholesterol        *float64 `json:"cholesterol"`
	Sodium             *float64 `json:"sodium"`
	Potassium          *float64 `json:"potassium"`
	TotalCarbohydrate  *float64 `json:"totalCarbohydrate"`
	DietaryFiber       *float64 `json:"dietaryFiber"`
	Sugar              *float64 `json:"sugar"`
	Protein            *float64 `json:"protein"`
}

type NewMeasurement struct {
	ID          int             `json:"id"`
	Name        string          `json:"name"`
	Unit        MeasurementUnit `json:"unit"`
	Description string          `json:"description"`
	Hashtags    []int           `json:"hashtags"`
}

type NewMessage struct {
	Chat int    `json:"chat"`
	Text string `json:"text"`
}

type NewPermission struct {
	Name        string  `json:"name"`
	Description *string `json:"description"`
	Hashtags    []int   `json:"hashtags"`
}

type NewPortion struct {
	IngredientID int     `json:"ingredientId"`
	Amount       float64 `json:"amount"`
	Type         int     `json:"type"`
}

type NewPortionType struct {
	Name string `json:"name"`
}

type NewPost struct {
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type NewRecipe struct {
	IngredientID int `json:"ingredientId"`
}

type NewReply struct {
	Chat int    `json:"chat"`
	Text string `json:"text"`
}

type NewResource struct {
	Name      string  `json:"name"`
	Thumbnail *string `json:"thumbnail"`
	Image     *string `json:"image"`
	Video     *string `json:"video"`
	Hashtags  []int   `json:"hashtags"`
}

type NewRole struct {
	Name        string  `json:"name"`
	Description *string `json:"description"`
	Hashtags    []int   `json:"hashtags"`
}

type NewUser struct {
	Name        string  `json:"name"`
	DisplayName string  `json:"displayName"`
	Email       string  `json:"email"`
	Thumbnail   *string `json:"thumbnail"`
	Image       *string `json:"image"`
	Video       *string `json:"video"`
}

type NewWaterfall struct {
	Text     string `json:"text"`
	Hashtags []int  `json:"hashtags"`
}

type Notification struct {
	ID        int       `json:"id"`
	Text      string    `json:"text"`
	Resource  Resource  `json:"Resource"`
	Reference Reference `json:"reference"`
	CreatedAt time.Time `json:"createdAt"`
	CreatedBy *User     `json:"createdBy"`
}

type NumericMeasurementResult struct {
	ID        int        `json:"id"`
	Chat      Chat       `json:"chat"`
	Text      string     `json:"text"`
	Value     float64    `json:"value"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy *User      `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
}

func (NumericMeasurementResult) IsMeasurementResult() {}

type Permission struct {
	ID          int        `json:"id"`
	Name        string     `json:"name"`
	Hashtags    []Hashtag  `json:"hashtags"`
	Description *string    `json:"description"`
	CreatedBy   *User      `json:"createdBy"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`
	UpdatedBy   *User      `json:"updatedBy"`
	DeletedAt   *time.Time `json:"deletedAt"`
	DeletedBy   *User      `json:"deletedBy"`
}

type Portion struct {
	ID                 int         `json:"id"`
	Name               string      `json:"name"`
	Type               PortionType `json:"type"`
	Hashtags           []int       `json:"hashtags"`
	CreatedAt          time.Time   `json:"createdAt"`
	CreatedBy          User        `json:"createdBy"`
	DeletedAt          *time.Time  `json:"deletedAt"`
	DeletedBy          *User       `json:"deletedBy"`
	UpdatedAt          time.Time   `json:"updatedAt"`
	UpdatedBy          User        `json:"updatedBy"`
	Amount             float64     `json:"amount"`
	Calories           *float64    `json:"calories"`
	TotalFat           *float64    `json:"totalFat"`
	SaturatedFat       *float64    `json:"saturatedFat"`
	MonounsaturatedFat *float64    `json:"monounsaturatedFat"`
	TransFat           *float64    `json:"transFat"`
	Cholesterol        *float64    `json:"cholesterol"`
	Sodium             *float64    `json:"sodium"`
	Potassium          *float64    `json:"potassium"`
	TotalCarbohydrate  *float64    `json:"totalCarbohydrate"`
	DietaryFiber       *float64    `json:"dietaryFiber"`
	Sugar              *float64    `json:"sugar"`
	Protein            *float64    `json:"protein"`
}

type PortionType struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type Post struct {
	ID        int        `json:"id"`
	Text      string     `json:"text"`
	Hashtags  []Hashtag  `json:"hashtags"`
	Chat      Chat       `json:"chat"`
	CreatedBy User       `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt"`
	Resources []Resource `json:"resources"`
}

type Recipe struct {
	ID                 int        `json:"id"`
	Name               string     `json:"name"`
	Hashtags           []int      `json:"hashtags"`
	CreatedAt          time.Time  `json:"createdAt"`
	CreatedBy          *User      `json:"createdBy"`
	DeletedAt          *time.Time `json:"deletedAt"`
	DeletedBy          *User      `json:"deletedBy"`
	UpdatedAt          time.Time  `json:"updatedAt"`
	UpdatedBy          *User      `json:"updatedBy"`
	Portions           []Portion  `json:"portions"`
	Calories           *float64   `json:"calories"`
	TotalFat           *float64   `json:"totalFat"`
	SaturatedFat       *float64   `json:"saturatedFat"`
	MonounsaturatedFat *float64   `json:"monounsaturatedFat"`
	TransFat           *float64   `json:"transFat"`
	Cholesterol        *float64   `json:"cholesterol"`
	Sodium             *float64   `json:"sodium"`
	Potassium          *float64   `json:"potassium"`
	TotalCarbohydrate  *float64   `json:"totalCarbohydrate"`
	DietaryFiber       *float64   `json:"dietaryFiber"`
	Sugar              *float64   `json:"sugar"`
	Protein            *float64   `json:"protein"`
}

type Reference struct {
	ID   string        `json:"id"`
	Type ReferenceType `json:"type"`
}

type Reply struct {
	ID        int        `json:"id"`
	Text      string     `json:"text"`
	Resource  *Resource  `json:"resource"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy *User      `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
}

type Resource struct {
	ID        int        `json:"id"`
	Name      string     `json:"name"`
	Hashtags  []Hashtag  `json:"hashtags"`
	Thumbnail *string    `json:"thumbnail"`
	Image     *string    `json:"image"`
	Video     *string    `json:"video"`
	Chat      Chat       `json:"chat"`
	CreatedBy *User      `json:"createdBy"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy *User      `json:"updatedBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
}

type ResourceMeasurementResult struct {
	ID        int        `json:"id"`
	Chat      Chat       `json:"chat"`
	Text      string     `json:"text"`
	Value     Resource   `json:"value"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy User       `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy User       `json:"updatedBy"`
}

func (ResourceMeasurementResult) IsMeasurementResult() {}

type Result struct {
	Status ResultStatus `json:"status"`
}

type ResultsFilter struct {
	SortOrder  *ResultsOrder  `json:"sortOrder"`
	SortBy     *ResultsSortBy `json:"sortBy"`
	Contains   *string        `json:"contains"`
	StartsWith *string        `json:"startsWith"`
	EndsWith   *string        `json:"endsWith"`
	Limit      *int           `json:"limit"`
	After      *time.Time     `json:"after"`
	Before     *time.Time     `json:"before"`
	Hashtags   []int          `json:"hashtags"`
}

type Role struct {
	ID          int          `json:"id"`
	Name        string       `json:"name"`
	Hashtags    []Hashtag    `json:"hashtags"`
	Description *string      `json:"description"`
	Permissions []Permission `json:"permissions"`
	CreatedBy   *User        `json:"createdBy"`
	CreatedAt   time.Time    `json:"createdAt"`
	UpdatedAt   time.Time    `json:"updatedAt"`
	UpdatedBy   *User        `json:"updatedBy"`
	DeletedAt   *time.Time   `json:"deletedAt"`
	DeletedBy   *User        `json:"deletedBy"`
}

type TextMeasurementResult struct {
	ID        int        `json:"id"`
	Chat      Chat       `json:"chat"`
	Text      string     `json:"text"`
	Value     string     `json:"value"`
	CreatedAt time.Time  `json:"createdAt"`
	CreatedBy User       `json:"createdBy"`
	DeletedAt *time.Time `json:"deletedAt"`
	DeletedBy *User      `json:"deletedBy"`
	UpdatedAt time.Time  `json:"updatedAt"`
	UpdatedBy User       `json:"updatedBy"`
}

func (TextMeasurementResult) IsMeasurementResult() {}

type UpdateDependentResource struct {
	Thumbnail *string `json:"thumbnail"`
	Image     *string `json:"image"`
	Video     *string `json:"video"`
}

type UpdateIngredient struct {
	ID                 int      `json:"id"`
	Name               *string  `json:"name"`
	Hashtags           []int    `json:"hashtags"`
	Calories           *float64 `json:"calories"`
	TotalFat           *float64 `json:"totalFat"`
	SaturatedFat       *float64 `json:"saturatedFat"`
	MonounsaturatedFat *float64 `json:"monounsaturatedFat"`
	TransFat           *float64 `json:"transFat"`
	Cholesterol        *float64 `json:"cholesterol"`
	Sodium             *float64 `json:"sodium"`
	Potassium          *float64 `json:"potassium"`
	TotalCarbohydrate  *float64 `json:"totalCarbohydrate"`
	DietaryFiber       *float64 `json:"dietaryFiber"`
	Sugar              *float64 `json:"sugar"`
	Protein            *float64 `json:"protein"`
}

type UpdateMeasurement struct {
	ID          int     `json:"id"`
	Name        *string `json:"name"`
	Description *string `json:"description"`
	Hashtags    []int   `json:"hashtags"`
}

type UpdateMessage struct {
	ID   int     `json:"id"`
	Text *string `json:"text"`
}

type UpdatePermission struct {
	ID          int     `json:"id"`
	Name        *string `json:"name"`
	Description *string `json:"description"`
	Hashtags    []int   `json:"hashtags"`
}

type UpdatePortion struct {
	ID     int     `json:"id"`
	Amount float64 `json:"amount"`
	Type   int     `json:"type"`
}

type UpdatePortionType struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

type UpdatePost struct {
	ID       string   `json:"id"`
	Text     string   `json:"text"`
	Hashtags []string `json:"hashtags"`
}

type UpdateRecipe struct {
	ID int `json:"id"`
}

type UpdateReply struct {
	ID   int     `json:"id"`
	Text *string `json:"text"`
}

type UpdateResource struct {
	ID        int     `json:"id"`
	Name      *string `json:"name"`
	Thumbnail *string `json:"thumbnail"`
	Image     *string `json:"image"`
	Video     *string `json:"video"`
	Hashtags  []int   `json:"hashtags"`
}

type UpdateRole struct {
	ID          int     `json:"id"`
	Name        *string `json:"name"`
	Description *string `json:"description"`
	Hashtags    []int   `json:"hashtags"`
}

type UpdateUser struct {
	ID          int                      `json:"id"`
	Name        *string                  `json:"name"`
	DisplayName *string                  `json:"displayName"`
	Email       *string                  `json:"email"`
	Thumbnail   *string                  `json:"thumbnail"`
	Image       *string                  `json:"image"`
	Video       *string                  `json:"video"`
	Hashtags    []int                    `json:"hashtags"`
	Roles       []int                    `json:"roles"`
	Profile     *UpdateDependentResource `json:"profile"`
}

type UpdateWaterfall struct {
	ID       string `json:"id"`
	Text     string `json:"text"`
	Hashtags []int  `json:"hashtags"`
}

type User struct {
	ID            int            `json:"id"`
	Name          string         `json:"name"`
	DisplayName   string         `json:"displayName"`
	Email         string         `json:"email"`
	Thumbnail     *string        `json:"thumbnail"`
	Image         *string        `json:"image"`
	Video         *string        `json:"video"`
	Hashtags      []Hashtag      `json:"hashtags"`
	Roles         []Role         `json:"roles"`
	Notifications []Notification `json:"notifications"`
	Measurements  []Measurement  `json:"measurements"`
	Resources     []Resource     `json:"resources"`
	Chat          Chat           `json:"chat"`
	CreatedAt     time.Time      `json:"createdAt"`
	UpdatedAt     time.Time      `json:"updatedAt"`
	DeletedAt     *time.Time     `json:"deletedAt"`
}

type Waterfall struct {
	ID        int              `json:"id"`
	Text      string           `json:"text"`
	Hashtags  []Hashtag        `json:"hashtags"`
	Events    []WaterfallEvent `json:"events"`
	CreatedBy *User            `json:"createdBy"`
	CreatedAt time.Time        `json:"createdAt"`
	UpdatedAt time.Time        `json:"updatedAt"`
	UpdatedBy *User            `json:"updatedBy"`
	DeletedAt *time.Time       `json:"deletedAt"`
	DeletedBy *User            `json:"deletedBy"`
}

type WaterfallMessageEvent struct {
	ID          int        `json:"id"`
	Text        string     `json:"text"`
	Hashtags    []Hashtag  `json:"hashtags"`
	ScheduledTo time.Time  `json:"scheduledTo"`
	CreatedBy   *User      `json:"createdBy"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`
	UpdatedBy   *User      `json:"updatedBy"`
	DeletedAt   *time.Time `json:"deletedAt"`
	DeletedBy   *User      `json:"deletedBy"`
	Message     string     `json:"message"`
	Resource    *Resource  `json:"resource"`
}

func (WaterfallMessageEvent) IsWaterfallEvent() {}

type WaterfallPostEvent struct {
	ID          int        `json:"id"`
	Text        string     `json:"text"`
	Hashtags    []Hashtag  `json:"hashtags"`
	ScheduledTo time.Time  `json:"scheduledTo"`
	CreatedBy   *User      `json:"createdBy"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`
	UpdatedBy   *User      `json:"updatedBy"`
	DeletedAt   *time.Time `json:"deletedAt"`
	DeletedBy   *User      `json:"deletedBy"`
	Post        Post       `json:"post"`
}

func (WaterfallPostEvent) IsWaterfallEvent() {}

type HashtagContext string

const (
	HashtagContextVideo        HashtagContext = "Video"
	HashtagContextPhotos       HashtagContext = "Photos"
	HashtagContextIngredients  HashtagContext = "Ingredients"
	HashtagContextRecipes      HashtagContext = "Recipes"
	HashtagContextMeals        HashtagContext = "Meals"
	HashtagContextMeasurements HashtagContext = "Measurements"
	HashtagContextPosts        HashtagContext = "Posts"
	HashtagContextUsers        HashtagContext = "Users"
	HashtagContextWaterfalls   HashtagContext = "Waterfalls"
)

var AllHashtagContext = []HashtagContext{
	HashtagContextVideo,
	HashtagContextPhotos,
	HashtagContextIngredients,
	HashtagContextRecipes,
	HashtagContextMeals,
	HashtagContextMeasurements,
	HashtagContextPosts,
	HashtagContextUsers,
	HashtagContextWaterfalls,
}

func (e HashtagContext) IsValid() bool {
	switch e {
	case HashtagContextVideo, HashtagContextPhotos, HashtagContextIngredients, HashtagContextRecipes, HashtagContextMeals, HashtagContextMeasurements, HashtagContextPosts, HashtagContextUsers, HashtagContextWaterfalls:
		return true
	}
	return false
}

func (e HashtagContext) String() string {
	return string(e)
}

func (e *HashtagContext) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = HashtagContext(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid HashtagContext", str)
	}
	return nil
}

func (e HashtagContext) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MeasurementUnit string

const (
	MeasurementUnitCentimeter  MeasurementUnit = "CENTIMETER"
	MeasurementUnitInch        MeasurementUnit = "INCH"
	MeasurementUnitKilo        MeasurementUnit = "KILO"
	MeasurementUnitPounds      MeasurementUnit = "POUNDS"
	MeasurementUnitRepetitions MeasurementUnit = "REPETITIONS"
	MeasurementUnitResource    MeasurementUnit = "RESOURCE"
)

var AllMeasurementUnit = []MeasurementUnit{
	MeasurementUnitCentimeter,
	MeasurementUnitInch,
	MeasurementUnitKilo,
	MeasurementUnitPounds,
	MeasurementUnitRepetitions,
	MeasurementUnitResource,
}

func (e MeasurementUnit) IsValid() bool {
	switch e {
	case MeasurementUnitCentimeter, MeasurementUnitInch, MeasurementUnitKilo, MeasurementUnitPounds, MeasurementUnitRepetitions, MeasurementUnitResource:
		return true
	}
	return false
}

func (e MeasurementUnit) String() string {
	return string(e)
}

func (e *MeasurementUnit) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MeasurementUnit(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MeasurementUnit", str)
	}
	return nil
}

func (e MeasurementUnit) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
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

type ResultsOrder string

const (
	ResultsOrderDescending ResultsOrder = "Descending"
	ResultsOrderAscending  ResultsOrder = "Ascending"
)

var AllResultsOrder = []ResultsOrder{
	ResultsOrderDescending,
	ResultsOrderAscending,
}

func (e ResultsOrder) IsValid() bool {
	switch e {
	case ResultsOrderDescending, ResultsOrderAscending:
		return true
	}
	return false
}

func (e ResultsOrder) String() string {
	return string(e)
}

func (e *ResultsOrder) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ResultsOrder(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ResultsOrder", str)
	}
	return nil
}

func (e ResultsOrder) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type ResultsSortBy string

const (
	ResultsSortByCreatedAt ResultsSortBy = "CreatedAt"
	ResultsSortByUpdatedAt ResultsSortBy = "UpdatedAt"
	ResultsSortByDeletedAt ResultsSortBy = "DeletedAt"
	ResultsSortByName      ResultsSortBy = "Name"
)

var AllResultsSortBy = []ResultsSortBy{
	ResultsSortByCreatedAt,
	ResultsSortByUpdatedAt,
	ResultsSortByDeletedAt,
	ResultsSortByName,
}

func (e ResultsSortBy) IsValid() bool {
	switch e {
	case ResultsSortByCreatedAt, ResultsSortByUpdatedAt, ResultsSortByDeletedAt, ResultsSortByName:
		return true
	}
	return false
}

func (e ResultsSortBy) String() string {
	return string(e)
}

func (e *ResultsSortBy) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ResultsSortBy(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ResultsSortBy", str)
	}
	return nil
}

func (e ResultsSortBy) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
