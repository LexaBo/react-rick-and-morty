import {FiltersAction, FiltersActionTypes, FiltersState} from "../types/filters"

const initialState: FiltersState = {
    filtersName: '',
    filtersStatus: '',
    filtersGender: ''
}

const filters = (state = initialState, action:FiltersAction) => {
    switch (action.type) {
        case  FiltersActionTypes.FILTERS_SET_NAME:
            return {
                ...state,
                filtersName: action.payload ? `&name=${action.payload}` : ''
            }
        case  FiltersActionTypes.FILTERS_SET_STATUS:
            return {
                ...state,
                filtersStatus: action.payload ? `&status=${action.payload}` : ''
            }
        case  FiltersActionTypes.FILTERS_SET_GENDER:
            return {
                ...state,
                filtersGender: action.payload ? `&gender=${action.payload}` : ''
            }
        default: return state
    }
}

export default filters;