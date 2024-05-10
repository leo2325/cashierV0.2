import React, { useEffect, useState } from 'react';
import DayDate from '../../../../utils/getDayDate';
import './index.css';

import { useSelector } from 'react-redux';

const UserBoarder = ({ user, selectedUser, openProfile }) => {
    const formatDate = DayDate; 
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);
    const [isConnectedUser, setIsConnectedUser] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Vérifier si l'utilisateur sélectionné est dans la liste des utilisateurs connectés
        setIsConnectedUser(loggedInUsers.some(user => user.id === selectedUser.id));
    }, [loggedInUsers, selectedUser]);

    const loadProfilePicture = () => {
        if (user && user.ProfilePicture) {
            import(`../../../../assets/connexion/profilePictures/${user.ProfilePicture}`)
                .then(image => {
                    setProfilePicture(image.default);
                })
                .catch(error => console.error('Error loading profile picture:', error));
        }
    };
    useEffect(() => {
        loadProfilePicture();
    }, [selectedUser]); // Appel loadProfilePicture lorsque user change

    return (
        <div className='userBoarder_container'>
            {selectedUser && (
                <div className='selectedUser'>
                    <div className='userPicture_container'>
                        {profilePicture && (
                            <img className='profilePicture' src={profilePicture} alt='user shot'/>
                        )}
                    </div>
                    <div className='selectedUserInfos'>
                        <p className='mail'>{user.Mail}</p>                        
                        <p className='userName'><span>Username: </span> {user.UserName}</p>
                        <p className='name'><span>Name: </span> {user.Name}</p>
                        <p className='title'><span>Title: </span> {user.Title}</p>
                        
                        <p><span>login:</span></p>
                        <p className='dayDate'>{formatDate()}</p>
                        <p className='loginTime'><span>LoginTime: </span> {user.connexionTime}</p>
                    </div>
                </div>
            )}
            
            <div className='userBoarderButton_container'>
                {/* Appeler la fonction openProfile lors du clic sur le bouton */}
                <button
                    type="button"
                    className='button checkUserProfil_button'
                    onClick={openProfile}
                >
                    <p>Consulter/Modifier</p>
                </button>
            </div>

        </div>
    );
};

export default UserBoarder;
