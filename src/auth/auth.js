import { firebaseAuth } from '../firebase';
import * as authActions from './actions';

export function initAuth(dispatch) {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(
            (user) => {
                dispatch(authActions.initAuth(user));
                unsubscribe();
                resolve();
            }, 
            err => reject(err));
    });
}

