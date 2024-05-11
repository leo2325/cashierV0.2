import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFail, logout } from '../../../slices/userSlice';
import { teamDatas } from '../../../datas/teamDatas';
import './index.css';
import '../../../style/animations.css';

function ConnexionForm({ getTime, loggedInUser, loggedInUsers, selectedUser, loggedOutUser, shiftUsers }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState({
        showError: false,
        showSuccess: false
    });
    const dispatch = useDispatch();

    // Suppression du message d'erreur/succès au bout de 2 secondes.
    useEffect(() => {
        if (formState.showSuccess || formState.showError || formState.showLogout ) {
            const timeoutId = setTimeout(() => {
                setFormState(prevState => ({
                    ...prevState,
                    showSuccess: false,
                    showError: false,
                    showLogout: false
                }));
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [formState]);
    // Remplissage automatique de l'input du formulaire lors de la seléction d'un utilisateur.
    useEffect(() => {
        if (selectedUser) {
            setUsername(selectedUser.UserName);
        }
    }, [selectedUser]);

    // Fonction de connexion.
    const handleLogin = async (event) => {
        event.preventDefault();
        const user = teamDatas.find(user => user.UserName === username && user.Password === password);
        if (user) {
            dispatch(loginSuccess({ user: user, connexionTime: getTime() }));
            setUsername('');
            setPassword('');
            console.log('loggedInUser:', loggedInUser);
            setFormState(prevState => ({
                ...prevState,
                showSuccess: true
            }));
        } 
        else if (!user) {
            dispatch(loginFail());
            setFormState(prevState => ({
                ...prevState,
                showError: true
            }));
        }
        else {

        }
    }; 
    // Fonction de déconnexion.
    const handleLogout = async (event) => {
        dispatch(logout({ user: selectedUser, logoutTime: getTime() }));    
        setUsername('');
        setPassword('');
        setFormState(prevState => ({
            ...prevState,
            showLogout: true
        }));    
        console.log('shiftUsers', shiftUsers);// très bien placé
    };
    
    return (
        <form id="connexionForm" onSubmit={handleLogin}>
            <div className="edit-input">
                <label htmlFor="userName"></label>
                <input
                    type="text"
                    id="userName"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="edit-input">
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {selectedUser && loggedInUsers.some(user => user.UserName === selectedUser.UserName) ? (
                <button type="submit" name="logout" className="connexionButton logoutButton" onClick={handleLogout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button type="submit" name="login" className="connexionButton loginButton" onClick={handleLogin}>
                    <p>Login</p>
                </button>
            )}

            <input type="button" id="recoveringPasswordBtn" value="Forgot something ?" />

            <div className='connexionStatusScreen'>
                {formState.showError && (
                    <div className={`infoCardsUser zoomInOut`}>
                        <p className="errorMessage">Non reconnu</p>
                    </div>
                )}
                {formState.showSuccess && (
                    <div className={`infoCardsUser zoomInOut`}>
                        <p className="successMessage"> Hello {loggedInUser ? loggedInUser.UserName : 'User not logged in'}</p>
                    </div>
                )}
                {formState.showLogout && (
                    <div className={`infoCardsUser zoomInOut`}>
                        <p className="logoutMessage"> Bye {loggedOutUser ? loggedOutUser.UserName : 'User is not logged out'}</p>
                    </div>
                )}
            </div>  

        </form>
    );
}

export default ConnexionForm;
