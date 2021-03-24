import { types } from "../types/types"
import { firebase } from '../firebase/firebaseConfig' 
import { googleAuthProvider } from "../firebase/firebaseConfig"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123, 'Pedro') )
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
            dispatch(
                login( user.uid, user.displayName )
            )
        } )
    } 
}


export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})
