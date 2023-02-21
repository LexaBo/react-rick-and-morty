import "./character-information.scss";

import {fetchCharacter } from "./characterSlice";
import {Helmet, HelmetProvider } from "react-helmet-async";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import Loader from "../../loader/Loader";
import BackHome from "../../back-home/BackHome";
import NothingFound from "../../nothing-found/NothingFound";
import {InterfaceCharacterInfo} from "../../../type/character";

const CharacterInformation = () => {
    const {characterId } = useParams<{characterId?: string}>();
    const characterInfo =  useAppSelector((state) => state.character.characterInfo);
    const image =  useAppSelector((state) => state.character.image);
    const characterLoadingStatus = useAppSelector(state => state.character.characterLoadingStatus);
    const dispatch = useAppDispatch();
    let content;

    useEffect(() => {
        dispatch(fetchCharacter(characterId));
    }, []);

    const renderDescription = (info: InterfaceCharacterInfo) => {
      return  Object.keys(info).map((infoTitle: string) => {
         return  (
             <li className="character-information__item" key={infoTitle}>
                 <p className="character-information__text">
                     <span className="character-information__title">{infoTitle}:</span> <span className="character-information__description">{info[infoTitle as keyof typeof info]}</span>
                 </p>
             </li>
            )
        })
    }

    if (characterLoadingStatus === "loading") {
        content = <Loader/>;
    } else if (characterLoadingStatus === "error") {
        content =  <NothingFound />
    } else {
        content = (
            <div className="character-information">
                <div className="character-information__columns">
                    <div className="character-information__column">
                        <img className="character-information__image" src={image} alt=""/>
                    </div>
                    <div className="character-information__column">
                        <div className="character-information__list-wr">
                            <ul className="character-information__list">
                                {renderDescription(characterInfo)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="info character"
                    content="Rick and Morty character information"
                />
                <title>character information</title>
            </Helmet>
            <BackHome/>
            {content}
        </HelmetProvider>
    );
}

export default CharacterInformation;