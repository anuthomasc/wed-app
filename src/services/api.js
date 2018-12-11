import {fetchMethod} from '../services/fetchAPI'
const NewsAPI= 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=efaf4671168c475f9ef712524e31b282';

export const getNews=()=>{
    console.log("entered api file")
    return fetchMethod.get(NewsAPI)
}