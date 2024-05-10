import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { teamDatas } from '../../../../datas/teamDatas';
import sortUsersByLog from '../../../../utils/sortByLog';

import './index.css';

const UsersList = ({ selectedUser, setSelectedUser }) => {
    const [selectedUserId, setSelectedUserId] = useState(null);// Récupération de l'id utilisateur séléctionné
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);// Tableau utilisateurs connectés
    const loggedInUser = useSelector(state => state.user.isLoggedIn);

    // Fonction de tri des utilisateurs
    const usersSortedByLog = sortUsersByLog(teamDatas, loggedInUsers);

    const handleSelectUser = async () => {
        const selectedUserId = selectedUser ? selectedUser.id : null;
        const clickedUser = loggedInUsers.find(user => user.id === selectedUserId);
        if (clickedUser) {
            setSelectedUser(clickedUser);
            
            console.log('selectedUser', clickedUser);
        } else if (!loggedInUser) {
            const user = teamDatas.find(user => user.id === selectedUserId);
            setSelectedUser(user);
            console.log('selectedUser', selectedUser);
        } else {
            console.log('Utilisateur non trouvé');
        }
    };

    // Fonction de click utilisateur
    function handleUserClick(employee) {
        handleSelectUser(employee);
        setSelectedUser(employee); // Stocker les informations de l'utilisateur sélectionné dans l'état local
        setSelectedUserId(employee.id); // Stocker l'ID de l'utilisateur sélectionné
    }

    return (
        <div className='userList_container'>
            <ul>
                {/* Utiliser la méthode map pour parcourir la liste des employés triés */}
                {usersSortedByLog.map(employee => (
                    <li key={employee.id} onClick={() => handleUserClick(employee)} className={`${loggedInUsers.some(user => user.id === employee.id) ? 'connectedUserStyle' : ''} ${selectedUserId === employee.id ? 'selectedUserStyle' : ''}`}>
                        <div>
                            <p>{employee.UserName}</p>
                            <span>{employee.Title}</span>
                        </div>
                        <div>
                            <div className={`userConnexionStatusLight_container ${loggedInUsers.some(user => user.id === employee.id) ? 'userConnectedLight_container' : ''}`}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
