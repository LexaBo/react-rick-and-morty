import './back-home.scss';

import {Link} from 'react-router-dom';
import {useEffect} from "react";
import backIcon from '../../resources/img/common/back-icon.svg';

const BackHome = () => {
    useEffect(() => {
        document.body.classList.add('back-home-on-page')

        return () => {
            document.body.classList.remove('back-home-on-page')
        }
    }, []);

    return (
        <div className="back-home">
            <Link to="/" relative="path" className="back-home__link">
                <span className="back-home__link-text">back</span> <img
                className="back-home__icon" src={backIcon} alt=""/>
            </Link>
        </div>
    );
}

export default BackHome;