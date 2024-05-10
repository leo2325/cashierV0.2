import React from 'react';
import './index.css';

import actuTest from "../../assets/logo/actuTest.jpg";

import toDoList from "../../assets/logo/toDoListBackground.png";
import PostIt from "./PostIt/index.jsx";
function Home() {

    return (
        <div id="home">
            <div className="starterHome_container">
                {/*
                <p id="userCompanySlogan"> Connect to start your shift.</p>   
                <img src={ logoLantaWok } id="userCompanyLogos"/>  
                <p id="cashierCompanySlogan"> Start to connect your company.</p> 
                <img src={ logoCashierCompany } id="cashierCompanyLogos"/>  
                */}
            </div>
            <div className="home_container">
                <div className='modulesAppList'>
                    <ul>
                        <li className='cashierModule_openingButton'>
                            <p className='cashierOpeningButton'>Cashier</p>
                            <div className='Actu3'>
                            <img
                                src={ toDoList }
                                className='linkToDoList'
                                alt="todo list"
                            />
                        </div>
                        </li>
                        <li className='checkoutModule_OpeningButton'>
                            <p>Checkout</p>
                            <div className='Actu3'>
                                <img
                                    src={ toDoList }
                                    className='linkToDoList'
                                    alt="todo list"
                                />
                        </div>
                        </li>
                        <li className='settingsModule_openingButton'>
                            <p>Settings</p>
                            <div className='Actu3'>
                                <img
                                    src={ toDoList }
                                    className='linkToDoList'
                                    alt="todo list"
                                />
                        </div>
                        </li>
                        <li className='statsModule_openingButton'>
                            <p>Stats</p>
                            <div className='Actu3'>
                            <img
                                src={ toDoList }
                                className='linkToDoList'
                                alt="icône stats"
                            />
                        </div>
                        </li>
                    </ul>
                </div>
                
                <div className='home_mainBottomContainer'>
                    <PostIt/>
                    <div className='actuScreen'>
                        <div className='linkActu2_container'>
                            <img
                                src={ actuTest }
                                className='linkActu2' 
                                alt="actu"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
