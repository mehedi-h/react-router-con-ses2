import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/Favourites";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";


const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: "/favourites",
                element: <Favourites></Favourites>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreateRoute;