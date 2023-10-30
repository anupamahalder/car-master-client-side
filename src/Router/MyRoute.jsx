import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <div>About</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                // using params we will get the id 
                loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default MyRoute;