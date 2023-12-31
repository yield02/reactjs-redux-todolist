import {Record} from 'immutable';
import {INIT_AUTH, SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS} from './action-types'

export const AuthState = new Record({
    authenticated: false,
    id: null
})

export function authReducer(state = new AuthState(), {payload, type}) {
    switch(type) {
        case INIT_AUTH:
        case SIGN_IN_SUCCESS:
            console.log("Đăng nhập thành công");
            return state.merge({
                authenticated: !!payload,
                id: payload ? payload.uid : null
            });
            
        case SIGN_OUT_SUCCESS:
            return new AuthState();

        case SIGN_IN_ERROR:
            console.error("[L] ERROR Authentication: ", payload);
            return state;
            
        case SIGN_OUT_SUCCESS:
            return new AuthState();
        default: 
            return state;
    }
}