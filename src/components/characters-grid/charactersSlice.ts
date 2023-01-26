import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {InfoCharacters, ResponseCharacters, StateCharacters} from "../../type/characters";
import axios from "axios";

const initialState: StateCharacters = {
    characters: [],
    charactersLoadingStatus: '',
    page: 1,
    count: 1,
    itemPerPage: 1,
}

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (infoCharacter: InfoCharacters) => {
        const paramName =  infoCharacter.nameFilter ? `&name=${infoCharacter.nameFilter}` : '';
        const paramStatus =  infoCharacter.filtersStatus ? `&status=${infoCharacter.filtersStatus}` : '';
        const paramGender =  infoCharacter.filtersGender ? `&gender=${infoCharacter.filtersGender}` : '';

        return await axios.get<ResponseCharacters>(`https://rickandmortyapi.com/api/character?page=${infoCharacter.page}${paramName}${paramStatus}${paramGender}`.replace(/\s/g, ''));
    }
);

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharactersPageNum: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, state => {
                state.charactersLoadingStatus = 'loading'
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.charactersLoadingStatus = 'load';
                state.characters = action.payload.data.results;
                state.count = action.payload.data.info.count;
                state.itemPerPage = Math.ceil(action.payload.data.info.count/action.payload.data.info.pages);
            })
            .addCase(fetchCharacters.rejected, state => {
                state.charactersLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = charactersSlice;

export default reducer;
export const {setCharactersPageNum} = actions;