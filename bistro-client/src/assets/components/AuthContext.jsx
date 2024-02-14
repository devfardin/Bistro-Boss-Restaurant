import React, { createContext, useEffect, useState } from 'react'
import app from './firebase.confige';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import UseAxiospublic from './hoks/UseAxiospublic';


const GoogleProvider = new GoogleAuthProvider();
export const providerContext = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const axiosPublic= UseAxiospublic()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updataProfile = (name, profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profile
        })
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const logOutHandle = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currectUser => {
            setUser(currectUser)
            if(currectUser){
            const userInfo={email: currectUser.email}
            axiosPublic.post('/jwt', userInfo)
            .then(res=>{
                localStorage.setItem('access-token', res.data)
              
            })
            }
            else{
                localStorage.removeItem('access-token')

            }

            setLoading(false)
        })
        return () => unsubscribe()
    }, [axiosPublic])


    const info = { user, loginEmailPass, loading, updataProfile, googleLogin, logOutHandle, createUser }
    return (
        <providerContext.Provider value={info}>
            {children}
        </providerContext.Provider>
    )
}
export default AuthContext