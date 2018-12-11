import { getNews } from '../services/api';

export function getNewsList() {
    console.log("entered into action file 1");
    return (dispatch, getState) => {
        console.log("entered into action file 2");
        // getNews();
        return getNews().then(response => {
            console.log("entered into action file 3");
            return response.json();
        }).then(responseJson => {
                console.log(responseJson);
                dispatch(getNewsSuccess(responseJson));
            })
            .catch(error => {
            });
    }
}
export function getNewsSuccess(responseJson) {
    return ({
        type: 'NEWS_RESULT',
        payload: responseJson
    })
}