export interface CharacterState {
    characterInfo: CharacterInfoType
    image: string,
    characterLoadingStatus: string
}

export interface CharacterInfoType {
    name: string,
    species: string,
    status: string,
    gender: string,
    location: string,
}

export interface CharacterPayload {
    name: string,
    species: string,
    status: string,
    gender: string,
    location: { name: string },
    image: string,
}

export enum CharacterActionTypes {
    CHARACTER_FETCHING = 'CHARACTER_FETCHING',
    CHARACTER_FETCHED = 'CHARACTER_FETCHED',
    CHARACTER_FETCHING_ERROR = 'CHARACTER_FETCHING_ERROR',
}

interface FetchCharacterAction {
    type: CharacterActionTypes.CHARACTER_FETCHING;
}

interface FetchCharacterSuccessAction {
    type: CharacterActionTypes.CHARACTER_FETCHED;
    payload: CharacterPayload
}

interface FetchCharacterErrorAction {
    type: CharacterActionTypes.CHARACTER_FETCHING_ERROR;
}

export type CharacterAction = FetchCharacterAction
    | FetchCharacterSuccessAction
    | FetchCharacterErrorAction