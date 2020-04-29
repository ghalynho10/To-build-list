import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = user => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('user')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000);
    }
}

export const authLogin = (username, password) => {
    return dispatch => {

        dispatch(authStart())

        axios.post('rest-auth/login/', {
            username: username,
            password: password
        })
            .then(response => {
                console.log(response.data)

                const user = {
                    token: response.data.key,
                    username,
                    userId: response.data.user,
                    expirationDate: new Date(new Date().getTime() + 3600 * 1000)
                }

                localStorage.setItem('user', JSON.stringify(user))
                dispatch(authSuccess())
                dispatch(checkAuthTimeout(3600))
            })
            .catch(error => {
                dispatch(authFail(error))
                console.log(error.response)
            })
    }
}

export const authSignup = (username, email, password1, password2, first_name, last_name) => {
    return dispatch => {

        dispatch(authStart())
        const user = {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
            first_name: first_name,
            last_name: last_name
        }
        axios.post('rest-auth/registration', user)
            .then(response => {
                console.log(response.data)
                const user = {
                    token: response.data.key,
                    username,
                    userId: response.data.user,
                    expirationDate: new Date(new Date().getTime() + 3600 * 1000)
                }

                localStorage.setItem('user', JSON.stringify(user))
                dispatch(authSuccess())
                dispatch(checkAuthTimeout(3600))
            })
            .catch(error => {
                dispatch(authFail(error))
                console.log(error.response)
            })
    }
}


export const checkAuthState = () => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user === undefined || user === null) {
            dispatch(authLogout())
        } else {
            const expirationDate = new Date(user.expirationDate)
            if (expirationDate <= new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authSuccess(user))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

