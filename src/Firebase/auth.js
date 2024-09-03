import { auth } from "./Firebase";
import {createUserWithEmailAndPassword} from "firevase/auth"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth"
    import { Form } from "react-router-dom";

export const doCreateUserWithEmailAndPassword = async(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
export const doSignInWithEmailAndPassword = async(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const doSignInWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider)
    return result

}

export const doSignOut = () =>{
    return auth.signOut();
}