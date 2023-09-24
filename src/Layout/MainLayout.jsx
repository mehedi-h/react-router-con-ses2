import { Outlet } from "react-router-dom";
import Navbar from "../components/Hea/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1368px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;