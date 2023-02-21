import './app.scss';

import React, { Suspense } from 'react';
import Banner from "../components/main-banner/MainBanner";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
const MainPage = React.lazy(() => import("../components/pages/main-page/MainPage"));
const CharacterInformation = React.lazy(() => import("../components/pages/character-information/CharacterInformation"));
const PageNotFound = React.lazy(() => import("../components/pages/page-not-found/PageNotFound"));

function App() {
  return (
      <div className="main-container">
        <Banner/>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="character/:characterId" element={<CharacterInformation/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </Router>
        </Suspense>
      </div>
  );
}

export default App;
