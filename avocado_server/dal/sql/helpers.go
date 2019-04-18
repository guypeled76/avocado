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

func ParseAllUint(ids []string) ([]uint, error) {
	uids := make([]uint, 0)
	for _, id := range ids {
		uid, err := ParseUint(id)
		if err != nil {
			return nil, errors.New("could not parse uint from id")
		}
		uids = append(uids, uint(uid))
	}
	return uids, nil
}
