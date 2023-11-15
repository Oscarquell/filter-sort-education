import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WeatherPage from "./pages/WeatherPage/WeatherPage";
import CurrentPage from "./pages/CurrentPage/CurrentPage";

const App = () => {
    return (
    <Routes>
        <Route exact path={'/'} element={<HomePage />} />
        <Route exact path={'/weather'} element={<WeatherPage />} />
        <Route exact path={'/current'} element={<CurrentPage />} />
    </Routes>
    );
};

export default App;