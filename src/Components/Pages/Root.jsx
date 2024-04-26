import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h3>Root element</h3>
        </div>
    );
};

export default Root;