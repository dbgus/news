import { combineReducers } from "redux";
import init from './modules/Init'
import news from './modules/news'

export default combineReducers({
    init,
    news
})