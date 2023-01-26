import './characters-grid.scss';
import '../../style/pagination.scss';

import {useEffect} from 'react';
import CharactersItem from "../characters-item/CharactersItem";
import NothingFound from "../nothing-found/NothingFound";
import Loader from '../loader/Loader';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Pagination from "react-js-pagination";
import {fetchCharacters, setCharactersPageNum} from "./charactersSlice";
import {ItemCharacters} from "../../type/characters";


const CharactersGrid = () => {
    const elements = useAppSelector((state) => state.characters.characters)
    const page = useAppSelector((state) => state.characters.page)
    const charactersLoadingStatus = useAppSelector(state => state.characters.charactersLoadingStatus);
    const count =  useAppSelector((state) => state.characters.count);
    const itemPerPage = useAppSelector((state) => state.characters.itemPerPage);
    const nameFilter = useAppSelector((state) => state.filters.filtersName);
    const filtersStatus = useAppSelector((state) => state.filters.filtersStatus);
    const filtersGender = useAppSelector((state) => state.filters.filtersGender);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCharacters({page, nameFilter, filtersStatus, filtersGender}));
    }, [page, nameFilter, filtersStatus, filtersGender]);

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

    if (charactersLoadingStatus === "loading") {
        return <Loader/>;
    } else if (charactersLoadingStatus === "error") {
        return (
            <NothingFound/>
        )
    }

    return (
        <>
            <ul className="characters-list">
                {renderCharactersList(elements)}
            </ul>
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                hideNavigation={true}
                activePage={page}
                itemsCountPerPage={itemPerPage}
                totalItemsCount={count}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </>
    )
}

export default CharactersGrid;