import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import AllTourismSpot from '../Pages/AllTourismSpot';
import AddTourismSpot from '../privateRoute/AddTourismSpot';
import Login from '../Pages/Login';
import Rejister from '../Pages/Rejister';
import PrivateRoute from '../privateRoute/PrivateRoute';
import UpdateTourismSpot from '../privateRoute/UpdateTourismSpot';

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
                element: <PrivateRoute><AddTourismSpot></AddTourismSpot></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/rejister',
                element: <Rejister></Rejister>
            },
            {
                path: '/update',
                element: <PrivateRoute> <UpdateTourismSpot></UpdateTourismSpot> </PrivateRoute>
            }
        ]
    }
])

export default Routes;