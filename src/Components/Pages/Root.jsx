import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;