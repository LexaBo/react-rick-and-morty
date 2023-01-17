import './characters-grid.scss';
import '../../style/pagination.scss';

import { useEffect } from 'react';
import { useActions } from "../../hooks/useActions";
import CharactersItem from "../characters-item/CharactersItem";
import NothingFound from "../nothing-found/NothingFound";
import Loader from '../loader/Loader';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Pagination from "react-js-pagination";

const CharactersGrid = () => {
    const elements = useTypedSelector((state) => state.characters.characters)
    const page = useTypedSelector((state) => state.characters.page)
    const charactersLoadingStatus = useTypedSelector(state => state.characters.charactersLoadingStatus);
    const count =  useTypedSelector((state) => state.characters.count);
    const itemPerPage = useTypedSelector((state) => state.characters.itemPerPage);
    const nameFilter = useTypedSelector((state) => state.filters.filtersName);
    const filtersStatus = useTypedSelector((state) => state.filters.filtersStatus);
    const filtersGender = useTypedSelector((state) => state.filters.filtersGender);
    const { fetchCharacters, setCharactersPageNum } = useActions();

    useEffect(() => {
        fetchCharacters(page, nameFilter, filtersStatus, filtersGender);
    }, [page, nameFilter, filtersStatus, filtersGender]); // eslint-disable-line react-hooks/exhaustive-deps

    const renderCharactersList = (arr: any[]) => {
        if (arr.length === 0) {
            return (
                <NothingFound />
            )
        }

        return arr.map((item) => {
           const arrInfo = {
               name: item.name,
               img: item.image,
               id: item.id
            }

            return (
                <CharactersItem key={item.id} {...arrInfo}/>
            )
        });
    }

   const handlePageChange = (pageNumber: number) => {
       setCharactersPageNum(pageNumber);
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