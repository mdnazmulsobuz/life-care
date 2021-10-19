import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../pages/login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setuser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                setuser(result.user)
        });
    }

    // observe user state change 
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setuser(user);
            }
            else{
                setuser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{ });
    }

    return{
        user,
        signInUsingGoogle,
        logOut
    }
    
}

export default useFirebase;