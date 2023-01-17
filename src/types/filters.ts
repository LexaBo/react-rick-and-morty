export interface FiltersState {
    filtersName: string,
    filtersStatus: string
    filtersGender: string,
}

export enum FiltersActionTypes {
    FILTERS_SET_NAME = 'FILTERS_SET_NAME',
    FILTERS_SET_STATUS = 'FILTERS_SET_STATUS',
    FILTERS_SET_GENDER = 'FILTERS_SET_GENDER',
}

interface SetFiltersName {
    type: FiltersActionTypes.FILTERS_SET_NAME;
    payload: string;
}

interface SetFiltersStatus {
    type: FiltersActionTypes.FILTERS_SET_STATUS;
    payload: string;
}

interface SetFiltersGender {
    type: FiltersActionTypes.FILTERS_SET_GENDER;
    payload: string;
}

export type FiltersAction = SetFiltersName | SetFiltersStatus | SetFiltersGender