import React from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='home-page-wrap'>
            <div>
                <h1>Выберите страницу:</h1>
                <Link to='/weather'><input type="button" value='Прогноз погоды'/></Link>
                <Link to='/current'><input type="button" value='Курс валют'/></Link>
            </div>
        </div>
    );
};

export default HomePage;