import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase.config';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [toggle, setToggle] = useState(true)
    const refetch = () => {
        setToggle(!toggle)
    }

    const [tourismSpot, setTourismSpot] = useState([])

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
    const googleProvider = new GoogleAuthProvider();
    const googleHandle = () => {
        signInWithPopup(auth, googleProvider)
    }

    const GithubProvider = new GithubAuthProvider();
    const githubHandle = () => {
        signInWithPopup(auth, GithubProvider)
    }

    const updateUser = (currentUser, name, photoURL) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: photoURL
        })

    }


    //user management
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
            }
        });
    }, [])

    //all Tourism Data
    useEffect(() => {
        fetch('http://localhost:4000/allTourismSpot')
            .then(res => res.json())
            .then(data => setTourismSpot(data))
    }, [toggle])

    //for sorting
    const ascendingCost = () => {
        const ascending = tourismSpot.sort((a, b) => parseInt(a.averageCost) - parseInt(b.averageCost))
        setTourismSpot(ascending)

    }

    const decendingCost = () => {
        const decending = tourismSpot.sort((a, b) => parseInt(b.averageCost) - parseInt(a.averageCost))
        setTourismSpot(decending)


    }






    const info = { user, createUser, loginUser, logOut, setUser, tourismSpot, ascendingCost, decendingCost, refetch, googleHandle, githubHandle, updateUser }


    return (

        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;