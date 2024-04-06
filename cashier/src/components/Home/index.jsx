import React, { useState } from 'react';
import './index.css';
import logoLantaWok from "../../assets/logo/logoLantaWok.jpeg";
import logoCashierCompany from "../../assets/logo/logoCashierCompany.png";

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
                        <li>
                            <p>Start the Cashier</p>
                        </li>
                        <li>
                            <p>Checkout the day, the week, the ...</p>
                        </li>
                        <li>
                            <p>Change the Settings ?</p>
                        </li>
                        <li>
                            <p>Manage Manager !</p>
                        </li>
                    </ul>
                </div>
                <div className='home_mainBottomContainer'>
                    <div className='actuScreen'>
                        <p>actu screen</p>
                    </div>
                    <div className='nameToChange'>
                        <p>name to change</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
