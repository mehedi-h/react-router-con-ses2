import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/Favourites";
import Login from "../pages/Login/Login";


const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/favourites",
                element: <Favourites></Favourites>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

export default myCreateRoute;