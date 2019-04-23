import Axios from "axios";

const NEWS = 'module/news/NEWS'
const NEWS_SUCCESS = 'module/news/NEWS_SUCCESS'

export const news = () => ({ type: NEWS })
export const newsSuccess = data => ({ type: NEWS_SUCCESS, data })



const initialState = {
    loading: false,
    news: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case NEWS:
            return {
                ...state,
                loading: true
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.data
            }
        default:
            return state
    }
}


export const NewsRequest = (country) => dispatch => {
    dispatch(news())
    Axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            dispatch(newsSuccess(res.data.articles))
        })
}