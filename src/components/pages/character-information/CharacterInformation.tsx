import './character-information.scss';

import { CharacterInfoType } from "../../../types/character";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams} from 'react-router-dom';
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../loader/Loader";
import BackHome from "../../back-home/back-home";
import NothingFound from "../../nothing-found/NothingFound";

const CharacterInformation = () => {
    const { fetchCharacter } = useActions();
    const { characterId } = useParams();
    const characterInfo =  useTypedSelector((state) => state.character.characterInfo);
    const image =  useTypedSelector((state) => state.character.image);
    const characterLoadingStatus = useTypedSelector(state => state.character.characterLoadingStatus);

    useEffect(() => {
        fetchCharacter(characterId)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderDescription = (info: CharacterInfoType) => {
      return  Object.keys(info).map((infoTitle: string) => {
         return  (
             <li className="character-information__item" key={infoTitle}>
                 <p className="character-information__text">
                     <span className="character-information__title">{infoTitle}:</span> <span className="character-information__description">{info[infoTitle as keyof CharacterInfoType]}</span>
                 </p>
             </li>
            )
        })
    }

    if (characterLoadingStatus === "loading") {
        return <Loader/>;
    } else if (characterLoadingStatus === "error") {
        return (
            <NothingFound />
        )
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
            <div className="character-information">
                <div className="character-information__columns">
                    <div className="character-information__column">
                        <img className="character-information__image" src={image} alt=""/>
                    </div>
                    <div className="character-information__column">
                        <div className="character-information__list-wr">
                            <ul className="character-information__list">
                                { renderDescription(characterInfo) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default CharacterInformation;