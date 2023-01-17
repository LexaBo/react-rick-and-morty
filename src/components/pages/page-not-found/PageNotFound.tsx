import './page-not-found.scss';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import BackHome from "../../back-home/back-home";

export default function PageNotFound() {
    return (
        <HelmetProvider>
            <div id="error-page" className="page-not-found">
                <Helmet>
                    <meta
                        name="not found"
                        content="Rick and Morty not found page"
                    />
                    <title>not found</title>
                </Helmet>
                <BackHome/>
                <h1 className="page-not-found__title">Oops!</h1>
                <p className="page-not-found__text">Page not found</p>
            </div>
        </HelmetProvider>
    );
}