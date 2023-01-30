export interface InfoCharacters {
    activePageNumber: number,
    filterName: string,
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
    activePageNumber: number,
    totalItems: number,
    itemPerPage: number,
}