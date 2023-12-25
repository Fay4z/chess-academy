import {NavLink, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";

function RootLayout() {
    return (  
        <>
            <nav className="py-4 px-14 shadow-md">
                <div className="flex justify-between items-center">
                <div className="flex space-x-10 items-center">
                    <div className="font-bold text-xl">
                        <NavLink to="/">Logo</NavLink>
                    </div>
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn m-1"><GiHamburgerMenu className="h-6 w-6"/></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink className="text-gray-600 hover:text-gray-900" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-600 hover:text-gray-900" to="/courses">
                                    Chess Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-600 hover:text-gray-900" to="/gallery">
                                    Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-600 hover:text-gray-900" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className=" hidden md:flex space-x-14 ">
                        
                        <NavLink className="text-gray-600 hover:text-gray-900" to="/courses">
                            Chess Courses
                        </NavLink>
                        <NavLink className="text-gray-600 hover:text-gray-900" to="/gallery">
                            Gallery
                        </NavLink>
                        <NavLink className="text-gray-600 hover:text-gray-900" to="/contact">
                            Contact
                        </NavLink>

                    </div>
                </div>
                <div className="space-x-2">
                    <button className="btn btn-accent">Accent</button>
                        
                </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <Footer />
        </> 
    );
}

export default RootLayout;