import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logInOutIcon from '../../../../assets/logo/logInOutIcon.png';

import './index.css';

const TeamMateBoarder = () => {
    // Récupérer la liste des employés depuis le store Redux
    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const [formState, setFormState] = useState({
        rotateEffect: false
    });

    return (
        <div className='TeamMateBoarder_container'>
            {loggedInUser && (
                <div className='selectedUserInfos'>
                    <div className='loginStamp'>
                        <p>09h23</p>
                        <p className='dayDate'>27/03/24</p>
                    </div>
                    <p>Nom Prénom{loggedInUser.name}</p>
                    <p>title{loggedInUser.title}</p>
                    
                </div>
            )}
            <div className='disconnectUserButton_container'>
                <button className='disconnectUserButton' type="submit" name="submit" id="submit">
                    <img src={logInOutIcon} className="logInOutIcon" alt='logInOutIcon'/>
                </button>
            </div>
        </div>
    );
};

export default TeamMateBoarder;
