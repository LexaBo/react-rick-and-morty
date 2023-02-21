import "./main-page.scss";

import {Helmet, HelmetProvider} from "react-helmet-async";
import React from "react";

import Filters from "../../filters/Filters";
import CharactersGrid from "../../characters-grid/CharactersGrid";

export default function MainPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="main"
                    content="Rick and Morty information"
                />
                <title>Rick and Morty</title>
            </Helmet>
            <div className="main-page">
                <div className="main-page__columns">
                    <div className="main-page__column">
                        <Filters/>
                    </div>
                    <div className="main-page__column">
                        <CharactersGrid/>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}