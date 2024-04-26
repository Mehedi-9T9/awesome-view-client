import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import AllTourismSpot from '../Pages/AllTourismSpot';
import AddTourismSpot from '../privateRoute/AddTourismSpot';

const Routes = new createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allTourismSpot',
                element: <AllTourismSpot></AllTourismSpot>
            },
            {
                path: '/addTourismSpot',
                element: <AddTourismSpot></AddTourismSpot>
            }
        ]
    }
])

export default Routes;