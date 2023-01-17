import axios from "axios";
import {CharactersAction, CharactersActionTypes} from "../types/characters"
import {Dispatch} from "redux";

export const fetchCharacters = (pageNumber:number, name: string, status: string, gender: string) => {
    return async (dispatch: Dispatch<CharactersAction>) => {
        dispatch({
            type: CharactersActionTypes.CHARACTERS_FETCHING
        });
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}${name}${status}${gender}`.replace(/\s/g, ''))

            dispatch({
                type: CharactersActionTypes.CHARACTERS_FETCHED,
                payload: response.data.results
            });
            dispatch({
                type: CharactersActionTypes.CHARACTERS_INFO_PAGES,
                payload: response.data.info
            });
        } catch (error) {
            dispatch({
                type: CharactersActionTypes.CHARACTERS_FETCHING_ERROR,
            });
            console.error(error);
        }
    }
}

export const setCharactersPageNum = (pageNumber:number) => {
    return  {
        type: CharactersActionTypes.CHARACTERS_SET_PAGE_NUM,
        payload: pageNumber
    };
}