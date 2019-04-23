const LOADING = 'module/init/LOADING'

const COUNTRY_CHECK = 'module/init/COUNTRY_CHECK'
const COUNTRY_EMPRTY = 'module/init/COUNTRY_EMPRTY'
const COUNTRY_CHANGE = 'module/init/COUNTRY_CHANGE'

export const loading = () => ({ type: LOADING })

export const countryCheck = (country) => ({ type: COUNTRY_CHECK, country })
export const countryEmpty = () => ({ type: COUNTRY_EMPRTY })
export const countryCHANGe = (country) => ({ type: COUNTRY_CHANGE, country })

const initialState = {
    country: '',
    loading: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case COUNTRY_CHECK:
            return {
                ...state,
                country: action.country,
                loading: false
            }
        case COUNTRY_EMPRTY:
            return {
                ...state,
                country: '',
                loading: false
            }
        case COUNTRY_CHANGE:
            return {
                ...state,
                country: action.country
            }
        default:
            return state
    }
}


export const CountryCheckAscny = () => dispatch => {
    dispatch(loading())
    if (localStorage.getItem('country')) {
        dispatch(countryCheck(localStorage.getItem('country')))
    }
    else {
        dispatch(countryEmpty())
    }
}