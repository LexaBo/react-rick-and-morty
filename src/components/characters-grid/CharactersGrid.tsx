import "./characters-grid.scss";
import "../../style/pagination.scss";

import {useEffect} from "react";
import CharactersItem from "../characters-item/CharactersItem";
import NothingFound from "../nothing-found/NothingFound";
import Loader from "../loader/Loader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Pagination from "react-js-pagination";
import {fetchCharacters, setCharactersPageNum} from "./charactersSlice";
import {ItemCharacters} from "../../type/characters";


const CharactersGrid = () => {
    const elements = useAppSelector((state) => state.characters.characters)
    const activePageNumber = useAppSelector((state) => state.characters.activePageNumber)
    const charactersLoadingStatus = useAppSelector(state => state.characters.charactersLoadingStatus);
    const totalItems =  useAppSelector((state) => state.characters.totalItems);
    const itemPerPage = useAppSelector((state) => state.characters.itemPerPage);
    const filterName = useAppSelector((state) => state.filters.filtersName);
    const filtersStatus = useAppSelector((state) => state.filters.filtersStatus);
    const filtersGender = useAppSelector((state) => state.filters.filtersGender);
    const dispatch = useAppDispatch();
    let content;

    useEffect(() => {
        dispatch(fetchCharacters({activePageNumber, filterName, filtersStatus, filtersGender}));
    }, [activePageNumber, filterName, filtersStatus, filtersGender]);

    const renderCharactersList = (arr: Array<ItemCharacters>) => {
        if (arr.length === 0) {
            return (
                <NothingFound />
            )
        }

        return arr.map((item) => {
           const arrInfo = {
               name: item.name,
               image: item.image,
               id: item.id
            }

            return (
                <CharactersItem key={item.id} {...arrInfo}/>
            )
        });
    }

   const handlePageChange = (pageNumber: number) => {
       dispatch(setCharactersPageNum(pageNumber));
    }

    if (charactersLoadingStatus === "error") {
        content = <NothingFound/>
    } else {
        content = (
            <ul className="characters-list">
                {renderCharactersList(elements)}
            </ul>
        )
    }

    return (
        <>
            {content}
            {charactersLoadingStatus === "error" ?
               "" :
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    hideNavigation={true}
                    activePage={activePageNumber}
                    itemsCountPerPage={itemPerPage}
                    totalItemsCount={totalItems}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                />
            }
            {charactersLoadingStatus === "loading" ? <Loader/> : ""}
        </>
    )
}

export default CharactersGrid;