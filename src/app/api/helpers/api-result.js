export const dataFound = (data) => {
    return {
        code: 1000,
        message: "Data Found",
        data: data,
        status: 'success'
    }
}

export const dataNotFound = () => {
    return {
        code: 1001,
        message: "Data Not Found",
        data: null,
        status: 'success'
    }
}

export const exception = (err) => {
    return {
        code: 1003,
        message: err && err.message ? err.message : err,
        data: null,
        status: 'error'
    }
}