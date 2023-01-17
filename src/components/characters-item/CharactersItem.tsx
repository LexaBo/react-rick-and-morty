import './characters-item.scss';

import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CharactersObjInterface } from "../../types/characters"

const HeroesListItem = ({name, img, id}:CharactersObjInterface) => {
    const link = `character/${id}`;

    return (
        <li
            className="character-item">
            <Link to={link} relative="path" className="character-item__link">
                <div className="character-item__image-wr">
                    <LazyLoadImage
                        alt="character"
                        className="character-item__image"
                        src={img}
                        effect="blur"
                    />
                </div>
                <div className="character-item__text-container">
                    <h3 className="character-item__name">{name}</h3>
                </div>
            </Link>
        </li>
    )
}

export default HeroesListItem;