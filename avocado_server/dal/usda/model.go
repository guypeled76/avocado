package usda

type SearchParams struct {
	SearchString string `json:"q,omitempty"`
	DataSource   string `json:"ds,omitempty"`
	FoodGroup    string `json:"fg,omitempty"`
}

type SearchResults struct {
	List struct {
		SearchString       string `json:"q"`
		DataReleaseVersion string `json:"sr"`
		DataSource         string `json:"ds"`
		Start              int    `json:"start"`
		End                int    `json:"end"`
		Total              int    `json:"total"`
		Group              string `json:"group"`
		Sort               string `json:"sort"`
		Item               []struct {
			Offset       int    `json:"offset"`
			Group        string `json:"group"`
			Name         string `json:"name"`
			NDBNO        string `json:"ndbno"`
			DataSource   string `json:"ds"`
			Manufacturer string `json:"manu"`
		} `json:"item"`
	} `json:"list"`
}

type QueryOptions struct {
	Max    int    `url:"max,omitempty"`
	Offset int    `url:"offset,omitempty"`
	Sort   string `url:"sort,omitempty"`
}

type ListParams struct {
	Lt string `json:"lt,omitempty"`
}

type ListResults struct {
	List struct {
		Lt    string `json:"lt"`
		Start int    `json:"start"`
		End   int    `json:"end"`
		Total int    `json:"total"`
		Sr    string `json:"sr"`
		Sort  string `json:"sort"`
		Item  []struct {
			Offset int    `json:"offset"`
			ItemID string `json:"id"`
			Name   string `json:"name"`
		} `json:"item"`
	} `json:"list"`
}

type NutrientsParams struct {
	FoodGroup   []string `json:"fg,omitempty"`
	NDBNO       string   `json:"ndbno,omitempty"`
	NutrientsID []string `json:"nutrients"`
	Subset      string   `json:"subset,omitempty"`
}

type NutrientResult struct {
	Report struct {
		DataReleaseVersion string `json:"sr"`
		Groups             []struct {
			ID          string `json:"id"`
			Description string `json:"description"`
		} `json:"groups"`
		Subset string `json:"subset"`
		End    int    `json:"end"`
		Start  int    `json:"start"`
		Total  int    `json:"total"`
		Foods  []struct {
			NDBNO     string  `json:"ndbno"`
			Name      string  `json:"name"`
			Weight    float64 `json:"weight"`
			Measure   string  `json:"measure"`
			Nutrients []struct {
				NutrientID int     `json:"nutrient_id"`
				Nutrient   string  `json:"nutrient"`
				Unit       string  `json:"unit"`
				Value      string  `json:"value"`
				Gm         float64 `json:"gm"`
			} `json:"nutrients"`
		} `json:"foods"`
	} `json:"report"`
}

type FoodsParams struct {
	Ndbno []string `json:"ndbno"`
	Type  string   `json:"type,omitempty"`
}

type FoodsResults struct {
	Foods []struct {
		Food struct {
			DataReleaseVersion string `json:"sr"`
			Type               string `json:"type"`
			Description        struct {
				NDBNO                  string  `json:"ndbno"`
				Name                   string  `json:"name"`
				ShortDescription       string  `json:"sd"`
				FoodGroup              string  `json:"fg"`
				ScientificName         string  `json:"sn"`
				CommercialName         string  `json:"cn"`
				Manufacturer           string  `json:"manu"`
				Nitrogen2ProteinFactor float64 `json:"nf"`
				CarbohydrateFactor     float64 `json:"cf"`
				FatFactor              float64 `json:"ff"`
				ProteinFactor          float64 `json:"pf"`
				RefusePercentage       string  `json:"r"`
				RefuseDescription      string  `json:"rd"`
				DataSource             string  `json:"ds"`
				ReportingUnit          string  `json:"ru"`
			} `json:"desc"`
			Nutrients []struct {
				NutrientID      interface{} `json:"nutrient_id"` //Issue
				Name            string      `json:"name"`
				Group           string      `json:"group"`
				Unit            string      `json:"unit"`
				Value           interface{} `json:"value"` //Issue
				Derivation      string      `json:"derivation"`
				SourceCode      interface{} `json:"sourcecode"`
				NumOfDataPoints interface{} `json:"dp"` //Issue
				StandardError   string      `json:"se"`
				Measures        []struct {
					Label    string      `json:"label"`
					Eqv      float64     `json:"eqv"`
					Eunit    string      `json:"eunit"`
					Quantity float64     `json:"qty"`
					Value    interface{} `json:"value"` //Issue
				} `json:"measures"`
			} `json:"nutrients"`
			Sources []struct {
				ID      int    `json:"id"`
				Title   string `json:"title"`
				Authors string `json:"authors"`
				Volume  string `json:"vol"`
				Issue   string `json:"iss"`
				Year    string `json:"year"`
			} `json:"sources"`
			Footnotes []interface{} `json:"footnotes"`
			Langual   []interface{} `json:"langual"`
		} `json:"food,omitempty"`
		Error string `json:"error,omitempty"`
	} `json:"foods"`
	Count    int     `json:"count"`
	Notfound int     `json:"notfound"`
	API      float64 `json:"api"`
}
