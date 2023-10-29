import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <div>About</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default MyRoute;