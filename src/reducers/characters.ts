import {CharactersAction, CharactersActionTypes, CharactersState} from "../types/characters"

const initialState: CharactersState = {
    characters: [],
    charactersLoadingStatus: '',
    page: 1,
    count: 1,
    itemPerPage: 1,
}

const characters = (state = initialState, action: CharactersAction): CharactersState => {
    switch (action.type) {
        case CharactersActionTypes.CHARACTERS_FETCHING:
            return {
                ...state,
                charactersLoadingStatus: 'loading'
            }
        case CharactersActionTypes.CHARACTERS_FETCHED:
            return {
                ...state,
                characters: action.payload,
                charactersLoadingStatus: 'load'
            }
        case CharactersActionTypes.CHARACTERS_FETCHING_ERROR:
            return {
                ...state,
                charactersLoadingStatus: 'error'
            }
        case CharactersActionTypes.CHARACTERS_INFO_PAGES:
            return {
                ...state,
                count: action.payload.count,
                itemPerPage: Math.ceil(action.payload.count/action.payload.pages),
            }
        case CharactersActionTypes.CHARACTERS_SET_PAGE_NUM:
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }
}

export default characters;