import React from 'react';
import UseAuth from '../Provider/UseAuth';
// import { Navigate } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()

    const { user, loading } = UseAuth()
    // if (!user) {
    //     return
    // }
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center"></span>
    }
    if (!user) {
        return <Navigate to="/login"></Navigate>

    }
    return (
        <div>
            {children}
        </div>
    )




};

export default PrivateRoute;