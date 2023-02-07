import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/blog",
                element : <Blog></Blog>
            },
            {
                path : "/dashboard",
                element : <Dashboard></Dashboard>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signup",
                element : <Signup></Signup>
            }
        ]
    }
])