export interface CharactersState {
    characters: CharactersObjInterface[],
    charactersLoadingStatus: string
    page: number,
    count: number,
    itemPerPage: number,
}

export interface CharactersInfoPagesPayload {
    count: number,
    pages: number
}

export interface CharactersObjInterface {
    name: string,
    img: string
    id: string
}

export enum CharactersActionTypes {
    CHARACTERS_FETCHING = 'CHARACTERS_FETCHING',
    CHARACTERS_FETCHED = 'CHARACTERS_FETCHED',
    CHARACTERS_FETCHING_ERROR = 'CHARACTERS_FETCHING_ERROR',
    CHARACTERS_INFO_PAGES = 'CHARACTERS_INFO_PAGES',
    CHARACTERS_SET_PAGE_NUM = 'CHARACTERS_SET_PAGE_NUM',
}

interface FetchCharactersAction {
    type: CharactersActionTypes.CHARACTERS_FETCHING;
}

interface FetchCharactersSuccessAction {
    type: CharactersActionTypes.CHARACTERS_FETCHED;
    payload: CharactersObjInterface[]
}

interface FetchCharactersErrorAction {
    type: CharactersActionTypes.CHARACTERS_FETCHING_ERROR;
}

interface FetchCharactersInfoPagesAction {
    type: CharactersActionTypes.CHARACTERS_INFO_PAGES;
    payload: CharactersInfoPagesPayload;
}


interface SetCharactersPageNum {
    type: CharactersActionTypes.CHARACTERS_SET_PAGE_NUM;
    payload: number;
}

export type CharactersAction = FetchCharactersAction
    | FetchCharactersSuccessAction
    | FetchCharactersErrorAction
    | FetchCharactersInfoPagesAction
    | SetCharactersPageNum