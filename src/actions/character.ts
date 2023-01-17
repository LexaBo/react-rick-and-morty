import axios from "axios";
import {CharacterAction, CharacterActionTypes} from "../types/character";
import {Dispatch} from "redux";

export const fetchCharacter = (id: string | undefined) => {
    return async (dispatch: Dispatch<CharacterAction>) => {
        dispatch({
            type: CharacterActionTypes.CHARACTER_FETCHING
        });
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

            dispatch({
                type: CharacterActionTypes.CHARACTER_FETCHED,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: CharacterActionTypes.CHARACTER_FETCHING_ERROR,
            });
            console.error(error);
        }
    }
}