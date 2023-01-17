import {FiltersActionTypes} from "../types/filters"

export const setFiltersName  = (name:string) => {
    return  {
        type: FiltersActionTypes.FILTERS_SET_NAME,
        payload: name
    };
}

export const setFiltersStatus = (status:string) => {
    return  {
        type: FiltersActionTypes.FILTERS_SET_STATUS,
        payload: status
    };
}

export const setFiltersGender = (gender:string) => {
    return  {
        type: FiltersActionTypes.FILTERS_SET_GENDER,
        payload: gender
    };
}