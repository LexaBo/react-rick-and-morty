import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {InterfaceCharacterResponse, InterfaceCharacterState} from "../../../type/character";
import axios from "axios";

const initialState:InterfaceCharacterState = {
    characterInfo: {
        name: '',
        species: '',
        status: '',
        gender: '',
        location: '',
    },
    image: '',
    characterLoadingStatus: '',
}


export const fetchCharacter = createAsyncThunk(
    'character/fetchCharacter',
    async (id?: string) => {
        return await axios.get<InterfaceCharacterResponse>(`https://rickandmortyapi.com/api/character/${id}`);
    }
);

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacter.pending, state => {
                state.characterLoadingStatus = 'loading'
            })
            .addCase(fetchCharacter.fulfilled, (state, action) => {
                state.characterLoadingStatus = 'load';
                state.characterInfo = {
                    name: action.payload.data.name,
                    species: action.payload.data.species,
                    status: action.payload.data.status,
                    gender: action.payload.data.gender,
                    location: action.payload.data.location.name
                };
                state.image = action.payload.data.image;
            })
            .addCase(fetchCharacter.rejected, state => {
                state.characterLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = characterSlice;

export default reducer;
export {actions};