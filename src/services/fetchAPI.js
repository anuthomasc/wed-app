const get = (url) => {
    console.log("entered fetch api file")
    console.log(url);
    return fetch(url);
}
const post = (url, data, header) => {
    return fetch(url,
        {
            method: 'POST',
            headers: {
                header
            },
            body: JSON.stringify({
                data
            }),
        })
}

export const fetchMethod = {
    get, post
}
