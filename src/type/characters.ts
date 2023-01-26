export interface InfoCharacters {
    page: number,
    nameFilter: string,
    filtersStatus: string,
    filtersGender: string
}

export interface ItemCharacters {
    name: string,
    image: string,
    id: string,
}

export interface ResponseCharacters {
    results: Array<ItemCharacters>,
    info: {
        count: number,
        pages: number
    }
}

export interface StateCharacters {
    characters: Array<ItemCharacters>,
    charactersLoadingStatus: string,
    page: number,
    count: number,
    itemPerPage: number,
}