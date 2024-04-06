import React from 'react';
import { Link } from 'react-router-dom';

import woksIMG from '../../../assets/productsCategory/woks.png';
import starterIMG from '../../../assets/productsCategory/entrees.png';
import drinksIMG from '../../../assets/productsCategory/drinks.png';
import dessertsIMG from '../../../assets/productsCategory/desserts.png';

import '../../../style/index.css';

function ProductsCategoryNav() {
    
    return (
        <nav id="orderNav">
            <Link to="/Woks" className="orderNavLink">
                <img src={woksIMG} className="orderNavImage" alt="Woks logo" />
                <h3 className="orderNavTitle">Woks</h3>
            </Link>
            <Link to="/Entrees" className="orderNavLink">
                <img src={starterIMG} className="orderNavImage" alt="Entrées logo" />
                <h3 className="orderNavTitle">Entrées</h3>
            </Link>
            <Link to="/Boissons" className="orderNavLink">
                <img src={drinksIMG} className="orderNavImage" alt="Boissons logo" />
                <h3 className="orderNavTitle">Boissons</h3>
            </Link>
            <Link to="/Desserts" className="orderNavLink">
                <img src={dessertsIMG} className="orderNavImage" alt="Desserts logo" />
                <h3 className="orderNavTitle">Desserts</h3>
            </Link>
        </nav>
    )
}

export default ProductsCategoryNav;