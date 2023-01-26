import './characters-item.scss';

import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface itemInfo {
    name: string,
    image: string,
    id: string,
}

const CharacterListItem = ({name, image, id}: itemInfo) => {
    const link = `character/${id}`;

    return (
        <li
            className="character-item">
            <Link to={link} relative="path" className="character-item__link">
                <div className="character-item__image-wr">
                    <LazyLoadImage
                        alt="character"
                        className="character-item__image"
                        src={image}
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

export default CharacterListItem;