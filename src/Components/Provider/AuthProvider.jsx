import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase.config';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //authintication
    const auth = getAuth(app)
    // create user
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    //Login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    //log out
    const logOut = () => {
        signOut(auth)
    }

    //user management
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
            }
        });
    }, [])





    const info = { user, createUser, loginUser, logOut, setUser }


    return (

        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;