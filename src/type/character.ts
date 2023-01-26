export interface InterfaceCharacterResponse {
    name: string,
    species: string,
    status: string,
    gender: string,
    location: {
        name: string,
    },
    image: string,
}

export interface InterfaceCharacterInfo {
    name: string,
    species: string,
    status: string,
    gender: string,
    location: string,
}

export interface InterfaceCharacterState {
    characterInfo: InterfaceCharacterInfo,
    image: string,
    characterLoadingStatus: string,
}
