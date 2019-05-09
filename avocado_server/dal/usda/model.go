package usda

type SearchParams struct {
	SearchString string `json:"q,omitempty"`
	DataSource   string `json:"ds,omitempty"`
	FoodGroup    string `json:"fg,omitempty"`
}

type SearchResults struct {
	List struct {
		SearchString string `json:"q"`
		Sr           string `json:"sr"`
		DataSource   string `json:"ds"`
		Start        int    `json:"start"`
		End          int    `json:"end"`
		Total        int    `json:"total"`
		Group        string `json:"group"`
		Sort         string `json:"sort"`
		Item         []struct {
			Offset     int    `json:"offset"`
			Group      string `json:"group"`
			Name       string `json:"name"`
			ItemID     string `json:"ndbno"`
			DataSource string `json:"ds"`
			Manu       string `json:"manu"`
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
	Fg          []string `json:"fg,omitempty"`
	Ndbno       string   `json:"ndbno,omitempty"`
	NutrientsID []string `json:"nutrients"`
	Subset      string   `json:"subset,omitempty"`
}

type NutrientReport struct {
	Report struct {
		Sr     string `json:"sr"`
		Groups []struct {
			ID          string `json:"id"`
			Description string `json:"description"`
		} `json:"groups"`
		Subset string `json:"subset"`
		End    int    `json:"end"`
		Start  int    `json:"start"`
		Total  int    `json:"total"`
		Foods  []struct {
			Ndbno     string  `json:"ndbno"`
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

type FoodsReport struct {
	Foods []struct {
		Food struct {
			Sr   string `json:"sr"`
			Type string `json:"type"`
			Desc struct {
				Ndbno string  `json:"ndbno"`
				Name  string  `json:"name"`
				Sd    string  `json:"sd"`
				Fg    string  `json:"fg"`
				Sn    string  `json:"sn"`
				Cn    string  `json:"cn"`
				Manu  string  `json:"manu"`
				Nf    float64 `json:"nf"`
				Cf    float64 `json:"cf"`
				Ff    float64 `json:"ff"`
				Pf    float64 `json:"pf"`
				R     string  `json:"r"`
				Rd    string  `json:"rd"`
				Ds    string  `json:"ds"`
				Ru    string  `json:"ru"`
			} `json:"desc"`
			Nutrients []struct {
				NutrientID interface{} `json:"nutrient_id"` //Issue
				Name       string      `json:"name"`
				Group      string      `json:"group"`
				Unit       string      `json:"unit"`
				Value      interface{} `json:"value"` //Issue
				Derivation string      `json:"derivation"`
				Sourcecode interface{} `json:"sourcecode"`
				Dp         interface{} `json:"dp"` //Issue
				Se         string      `json:"se"`
				Measures   []struct {
					Label string      `json:"label"`
					Eqv   float64     `json:"eqv"`
					Eunit string      `json:"eunit"`
					Qty   float64     `json:"qty"`
					Value interface{} `json:"value"` //Issue
				} `json:"measures"`
			} `json:"nutrients"`
			Sources []struct {
				ID      int    `json:"id"`
				Title   string `json:"title"`
				Authors string `json:"authors"`
				Vol     string `json:"vol"`
				Iss     string `json:"iss"`
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
