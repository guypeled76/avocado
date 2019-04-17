package sql

import (
	"errors"
	"strconv"
)

func ParseUint(id string) (uint, error) {
	uid, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		return 0, errors.New("could not parse uint from id")
	}
	return uint(uid), nil
}
