import React from 'react';
import UseAuth from '../Provider/UseAuth';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const { user } = UseAuth()
    // if (!user) {
    //     return
    // }
    if (user) {
        return children
    }
    return navigate('/')

};

export default PrivateRoute;