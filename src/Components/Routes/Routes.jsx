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
import MyList from '../Pages/MyList';
import DetailsPage from '../privateRoute/DetailsPage';
import ErrorPage from '../Pages/ErrorPage';
import AddTourismCountry from '../Pages/AddTourismCountry';

const Routes = new createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/updateTourismSpot/:id',
                element: <PrivateRoute> <UpdateTourismSpot></UpdateTourismSpot> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/updateTourismSpot/${params.id}`)

            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/tourismSpot/:id',
                element: <PrivateRoute> <DetailsPage></DetailsPage> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/tourismSpot/${params.id}`)
            },
            {
                path: '/addTourismCountry',
                element: <AddTourismCountry></AddTourismCountry>
            }
        ]
    }
])

export default Routes;