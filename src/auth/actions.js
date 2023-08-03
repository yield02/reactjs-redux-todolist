import { firebaseAuth } from "../firebase"
import { INIT_AUTH, SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "./action-types"
import firebase from 'firebase/compat/app';


export function initAuth(user) {
    return {
        type: INIT_AUTH,
        payload: user
    }
}

export function signOutSuccess() {
    return {
        type: SIGN_OUT_SUCCESS
    }
}

export function signInSuccess(result) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: result.user
    }
}

export function signInError(error) {
    return {
        type: SIGN_IN_ERROR,
        payload: error
    }
}

export function signOut() {
    return dispatch => {
        firebaseAuth.signOut()
            .then(() => dispatch(signOutSuccess()))
    }
}

export function authenticate(provider) {
    return dispatch => {
        firebaseAuth.signInWithPopup(provider)
            .then((result) => dispatch(signInSuccess(result)))
            .catch((error) => dispatch(signInError(error)))
    }
}

export function signInWithGithub() {
    return authenticate(new firebase.auth.GithubAuthProvider())
}

export function signInWithGoogle() {
    return authenticate(new firebase.auth.GoogleAuthProvider());
}

