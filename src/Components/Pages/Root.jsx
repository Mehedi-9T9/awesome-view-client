import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <h3>Root element</h3>
        </div>
    );
};

export default Root;