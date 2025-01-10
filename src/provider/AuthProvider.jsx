import { useEffect, useState } from "react";
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);



    const signUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                setLoading(false);
            }
            // console.log('curreent',currentUser);
        })
        return ()=>{
            return unSubscribe();
        }
    },[])


    const info = {
        user, loading, signIn,logOut, signUp
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider