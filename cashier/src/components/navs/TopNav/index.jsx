import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logoLantaWok.jpeg';

import './index.css';

function TopNav({ toggleConnexionModule }) {
    const [isModuleVisible, setIsModuleVisible] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    

    const handleClick = () => {
        toggleConnexionModule();
        setIsModuleVisible(prevState => !prevState);
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 500);
    };

    return (
        <div id="topNav">
            <Link to="/" className="LogoCompany">
                <img src={logo} alt="Logo Lanta Wok" />
            </Link>
            <div onClick={handleClick} id="toggleConnexionModule" className={isRotating ? 'rotate-effect' : ''}>
                <p>{isModuleVisible ? "X" : "Login"}</p>
            </div>
        </div>
    );
}

export default TopNav;
