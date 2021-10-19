import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../pages/login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
          
        .finally(()=> setIsLoading(false));
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
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false));
    }

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
    
}

export default useFirebase;