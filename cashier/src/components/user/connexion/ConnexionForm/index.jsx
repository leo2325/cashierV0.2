import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFail, logout } from '../../../../redux/slices/userSlice';
import { teamDatas } from '../../../../datas/teamDatas';
import './index.css';
import '../../../../style/animations.css';

function ConnexionForm({ getTime, loggedInUser, selectedUser }) {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState({
        showError: false,
        showSuccess: false
    });
   
    const [displayError, setDisplayError] = useState(false); // Nouvel état pour gérer l'affichage des erreurs
    
    const dispatch = useDispatch();

    const loggedInUsers = useSelector(state => state.user.loggedInUsers);
    const loggedOutUser = useSelector(state => state.user.loggedOutUser); // Tableau utilisateurs connectés
    const checkedOutUsers = useSelector(state => state.user.checkedOutUsers); // Tableau utilisateurs connectés

    // Suppression du message d'erreur ou de succès au bout de 2 secondes.
    useEffect(() => {
        if (formState.showSuccess || formState.showError) {
            const timeoutId = setTimeout(() => {
                setFormState(prevState => ({
                    ...prevState,
                    showSuccess: false,
                    showError: false
                }));
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [formState]);
    // Remplissage automatiqeu de l'input du formulaire de la connexion, à la selection d'un utilisateur.
    useEffect(() => {
        if (selectedUser) {
            setUsername(selectedUser.UserName);
        }
    }, [selectedUser]);

    // ?????????????
    const loginSuccessStatus = useSelector(state => state.user.status === "SUCCEEDED");
    const loginFailStatus = useSelector(state => state.user.status === "FAILED");


    //
    useEffect(() => {
        if (loginSuccessStatus) {
            setFormState(prevState => ({
                ...prevState,
                showSuccess: true
            }));
        } else if (loginFailStatus && displayError) { // Afficher l'erreur seulement si displayError est true
            setFormState(prevState => ({
                ...prevState,
                showError: true
            }));
            setDisplayError(false); // Désactiver l'affichage de l'erreur après l'avoir affichée
        }
    }, [loginSuccessStatus, loginFailStatus, displayError]);


    // Fonction de connexion.
    const handleLogin = async (event) => {
        event.preventDefault();
        const user = teamDatas.find(user => user.UserName === username && user.Password === password);
        if (user) {
            dispatch(loginSuccess({ user: user, connexionTime: getTime() }));
            setUsername('');
            setPassword('');
            console.log('loggedInUsers:', loggedInUsers);
        } else {
            dispatch(loginFail());
            setDisplayError(true); // Activer l'affichage de l'erreur
        }
    };

    
    // Fonction de déconnexion.
    const handleLogout = async (event) => {
        dispatch(logout({ user: selectedUser, logoutTime: getTime() }));        
    };
    
    useEffect(() => {
            console.log('checkedOutUsers:', checkedOutUsers);
            console.log('loggedOutUser:', loggedOutUser);
            console.log('loggedOutUser:', loggedOutUser);
        }, [loggedInUsers, loggedOutUser, checkedOutUsers]);
    
   
        
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
                <button type="submit" name="submit" className="connexionButton logoutButton" onClick={handleLogout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button type="submit" name="submit" className="connexionButton loginButton">
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
                        <p className="successMessage"> Bye {loggedInUser ? loggedInUser.UserName : 'User is not logged out'}</p>
                    </div>
                )}
            </div>  

        </form>
    );
}

export default ConnexionForm;
