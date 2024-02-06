const parseError = (err: any) => {
    const response = {
        nonFieldErrors: [] as string[],
        fields: {},
    }

    if (err?.message && !err?.data) {
        response.nonFieldErrors.push(err.message)
    }

    return response;
};

export { parseError };