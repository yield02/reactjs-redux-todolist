import { firebaseAuth } from "../firebase"
import { INIT_AUTH, SIGN_OUT_SUCCESS } from "./action-types"



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

export function signOut() {
    return dispatch => {
        firebaseAuth.signOut()
            .then(() => dispatch(signOutSuccess()))
    }
}

export function authenticate(provider) {

}

export function signInWithGithub() {

}

export function signInWithGoogle() {

}

export function signInWithTwitter() {

}