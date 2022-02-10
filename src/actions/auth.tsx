//import Swal from "sweetalert2"
import {firebase, googleAuthProvider} from "../firebase/firebase-config"
import { types } from "../types/types"


export const startLoginEmailPaswword = (email:string, password:string) => {
    return (dispatch:any) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}:any) => {
            console.log(user);
            dispatch(login(user.uid, user.displayName))
        }).catch(e => {
            console.log(e);
        })
        
    }
}


export const startGoogleLogin = () =>{
    return () =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( userCred =>  {
                console.log(userCred);
            })
    }
}


export const login = (uid:any, displayname:any) => ({
    type: types.login,
    payload: {
        uid,
        displayname,
    }
})

export const startLogout = () => {
    return async(dispatch:any) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})


