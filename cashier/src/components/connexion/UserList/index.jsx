import React, { useState } from 'react';
import logoLantaWok from "../../../assets/logo/logoLantaWok.jpeg";
import { useSelector } from 'react-redux';
import { teamDatas } from '../../../datas/teamDatas';
import './index.css';

const EmployeeList = ({ setSelectedUser }) => {

    const [selectedUserId, setSelectedUserId] = useState(null);// Récupération de l'id utilisateur séléctionné
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);// Tableau utilisateurs connectés

    // Fonction de tri des utilisateurs
    const sortedEmployees = teamDatas.sort((a, b) => {
        if (loggedInUsers.some(user => user.id === a.id) && !loggedInUsers.some(user => user.id === b.id)) {
            return -1;
        } else if (!loggedInUsers.some(user => user.id === a.id) && loggedInUsers.some(user => user.id === b.id)) {
            return 1;
        } else {
            return 0;
        }
    });
    // Fonction de click utilisateur
    const handleUserClick = (employee) => {
        setSelectedUser(employee); // Stocker les informations de l'utilisateur sélectionné dans l'état local
        setSelectedUserId(employee.id); // Stocker l'ID de l'utilisateur sélectionné
    };

    return (
        <div className='employeeList_container'>
            <img src={logoLantaWok} className='logoUserCompany' alt='Logo CashierCompany'/>
            <ul>
                {/* Utiliser la méthode map pour parcourir la liste des employés triés */}
                {sortedEmployees.map(employee => (
                    <li key={employee.id} onClick={() => handleUserClick(employee)} className={`${loggedInUsers.some(user => user.id === employee.id) ? 'activeUserBackground connectedUserBoxShadow' : ''} ${selectedUserId === employee.id ? 'activeUserBackground' : ''}`}>
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

export default EmployeeList;
