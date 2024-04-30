import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase.config';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [toggle, setToggle] = useState(true)
    const [loading, setLoading] = useState(true)
    const refetch = () => {
        setToggle(!toggle)
    }

    const [tourismSpot, setTourismSpot] = useState([])

    //authintication
    const auth = getAuth(app)
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log out
    const logOut = () => {

        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider();
    const googleHandle = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const GithubProvider = new GithubAuthProvider();
    // setLoading(true)
    const githubHandle = () => {
        return signInWithPopup(auth, GithubProvider)
    }

    const updateUser = (currentUser, name, photoURL) => {
        // setLoading(true)
        return updateProfile(currentUser, {
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
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
                setLoading(false)

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






    const info = { user, loading, createUser, loginUser, logOut, setUser, tourismSpot, ascendingCost, decendingCost, refetch, googleHandle, githubHandle, updateUser, toggle }


    return (

        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;