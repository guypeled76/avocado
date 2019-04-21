package apimodel

func CreateSuccessResult() (*Result, error) {
	return &Result{Status: ResultStatusSuccess}, nil
}

func CreateFailureResult(err error) (*Result, error) {
	return &Result{Status: ResultStatusFailure}, err
}
