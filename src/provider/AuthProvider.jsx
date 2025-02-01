import { useEffect, useState } from "react";
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hoooks/useAxiosPublic/useAxiosPublic";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);



    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updatePro = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setLoading(false);
                const user = {email: currentUser.email};
                // If user Exists then set the token into locale storage
                axiosPublic.post('/jwt', user)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                   
                })
            }
            else{
                //if user logout then clean the locale storage token
                localStorage.removeItem('access-token');
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic])


    const info = {
        user, loading, signIn, logOut, signUp, updatePro
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider