import {CharacterAction, CharacterActionTypes, CharacterState} from "../types/character"

const initialState: CharacterState = {
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

const character = (state = initialState, action: CharacterAction): CharacterState => {
    switch (action.type) {
        case CharacterActionTypes.CHARACTER_FETCHING:
            return {
                ...state,
                characterLoadingStatus: 'loading'
            }
        case CharacterActionTypes.CHARACTER_FETCHED:
            return {
                ...state,
                characterInfo: {
                    name: action.payload.name,
                    species: action.payload.species,
                    status: action.payload.status,
                    gender: action.payload.gender,
                    location: action.payload.location.name
                },
                image: action.payload.image,
                characterLoadingStatus: 'load'
            }
        case CharacterActionTypes.CHARACTER_FETCHING_ERROR:
            return {
                ...state,
                characterLoadingStatus: 'error'
            }
        default: return state
    }
}

export default character;