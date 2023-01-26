import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InterfaceInitialState {
    filtersName: string,
    filtersStatus: string,
    filtersGender: string
}

const initialState: InterfaceInitialState = {
    filtersName: '',
    filtersStatus: '',
    filtersGender: ''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFiltersName: (state, action: PayloadAction<string>) => {
            state.filtersName = action.payload;
        },
        setFiltersStatus: (state, action: PayloadAction<string>) => {
            state.filtersStatus = action.payload;
        },
        setFiltersGender: (state, action: PayloadAction<string>) => {
            state.filtersGender = action.payload;
        },
    },
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    setFiltersName,
    setFiltersStatus,
    setFiltersGender
} = actions;
