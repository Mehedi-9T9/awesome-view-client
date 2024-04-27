import { createContext, useState } from 'react';
import React, { useRef } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const contentRef = useRef(null);

    const scrollToContent = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    const info = { user, contentRef, scrollToContent }


    return (

        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;