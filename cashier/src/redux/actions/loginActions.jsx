export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
/*export const LOGOUT = "LOGOUT";*/

/* Authentication actions */
export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}
/*export const logout = () => {
    return {
        type: LOGOUT,
    }
}*/