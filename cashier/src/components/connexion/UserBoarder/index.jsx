import React from 'react';
import logInOutIcon from '../../../assets/connexion/logInOutIcon.png';
import userIcon from '../../../assets/connexion/userIcon.png';

import './index.css';

const TeamMateBoarder = ({ user, onLogout }) => {

    /// Fonction utilitaire pour formater la date actuelle au format 'jj/mm/aa'
    const formatDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear());
        return `${day}/${month}/${year}`;
    }; 

    const handleLogoutClick = () => {
        onLogout(user); // Appeler la fonction de logout
    };

    return (
        <div className='userBoarder_container'>
            {user && (
                <div className='selectedUserStamp'>
                    <p className='dayDate'>{formatDate()}</p>
                    <p className='username'>{user.Name}</p>
                    <p className='title'>{user.Title}</p>
                    <p className='loginTime'>Login: 09h23</p>
                </div>
            )}
            <div className='userBoarderButton_container'>
                
                <button 
                    type="button"
                    className='button disconnectUserButton'  
                    onClick={handleLogoutClick}
                >
                    <img 
                        src={ logInOutIcon } 
                        className="icon" 
                        alt='déconnecter utilisateur'
                    />
                </button>

                <button 
                    type="button"
                    className='button checkUserProfil_button' 
                
                >
                    <img 
                        src={ userIcon } 
                        className="icon" 
                        alt='ouvrir profil utilisateur'
                    />
                </button>

            </div>
        </div>
    );
};

export default TeamMateBoarder;
