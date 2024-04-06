import React from 'react';
import logoLantaWok from "../../../assets/logo/logoLantaWok.jpeg";
import { useSelector } from 'react-redux';
import { teamDatas } from '../../../datas/teamDatas';
import './index.css';

const EmployeeList = () => {
    // Récupérer la liste des utilisateurs connectés depuis le store Redux
    const loggedInUsers = useSelector(state => state.user.loggedInUsers);

    // Trier les employés en mettant les employés connectés en haut
    const sortedEmployees = teamDatas.sort((a, b) => {
        if (loggedInUsers.some(user => user.id === a.id) && !loggedInUsers.some(user => user.id === b.id)) {
            return -1;
        } else if (!loggedInUsers.some(user => user.id === a.id) && loggedInUsers.some(user => user.id === b.id)) {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <div className='employeeList_container'>
            <img src={logoLantaWok} className='logoUserCompany' alt='Logo CashierCompany'/>
            <ul>
                {/* Utiliser la méthode map pour parcourir la liste des employés triés */}
                {sortedEmployees.map(employee => (
                    <li key={employee.id} className={`${loggedInUsers.some(user => user.id === employee.id) ? 'whiteBackground' : ''}`}>
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
