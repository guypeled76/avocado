package sql

import (
	"errors"
	"fmt"
	"github.com/gremlinsapps/avocado_server/api/model"
	"github.com/jinzhu/gorm"
)

func Filter(db *gorm.DB, filter *apimodel.ResultsFilter, repo Repository) (*gorm.DB, error) {

	if filter == nil {
		return db, nil
	}

	if repo == nil {
		return db, errors.New("invalid filter repo")
	}

	if filter.Hashtags != nil {
		uids, err := ParseAllUint(filter.Hashtags)
		if err != nil {
			return db, err
		}

		db = db.Joins(fmt.Sprintf("JOIN %s_hashtags on %s_hashtags.%s_id=%ss.id", repo.GetBaseName(), repo.GetBaseName(), repo.GetBaseName(), repo.GetBaseName()))
		db = db.Where(fmt.Sprintf("%s_hashtags.hashtag_id in (?)", repo.GetBaseName()), uids)
		if db.Error != nil {
			return db, db.Error
		}

	}

	if filter.Contains != nil {
		db = db.Where(fmt.Sprintf("%s LIKE ?", repo.GetTextColumn()), fmt.Sprintf("%%%s%%", *filter.Contains))
		if db.Error != nil {
			return db, db.Error
		}
	}

	if filter.StartsWith != nil {
		db = db.Where(fmt.Sprintf("%s LIKE ?", repo.GetTextColumn()), fmt.Sprintf("%s%%", *filter.StartsWith))
		if db.Error != nil {
			return db, db.Error
		}
	}

	if filter.EndsWith != nil {
		db = db.Where(fmt.Sprintf("%s LIKE ?", repo.GetTextColumn()), fmt.Sprintf("%%%s", *filter.EndsWith))
		if db.Error != nil {
			return db, db.Error
		}
	}

	if filter.Limit != nil {
		db = db.Limit(*filter.Limit)
		if db.Error != nil {
			return db, db.Error
		}
	}

	return db, nil
}

type Repository interface {
	GetTextColumn() string
	GetBaseName() string
}
