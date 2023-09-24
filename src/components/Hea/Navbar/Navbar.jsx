import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center shadow-md rounded md:px-4 md:py-5">
                <Logo></Logo>

                <ul className="flex md:gap-5">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 font-semibold underline" : ""}
                        >Home
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/favourites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 font-semibold underline" : ""}
                        >Favourites
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 font-semibold underline" : ""}
                        >Login
                    </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;