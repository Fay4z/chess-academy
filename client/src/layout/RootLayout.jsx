import {NavLink, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import IMAGES from "../images/Images";
import { FaChessQueen } from "react-icons/fa";

function RootLayout() {


    return (  
        <>
            <nav className="">
                
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
                    <div className="drawer-content flex flex-col">
                        <div className="w-full navbar 
                        bg-background">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div> 
                            <div className="">
                                <div className="flex px-2 mx-2">
                                    <NavLink to="/">
                                        <div className="flex text-xl px-6">
                                            <FaChessQueen  className="
                                            flex w-20 h-11 items-center align-middle"/>
                                            <div className="flex flex-col">
                                                <p className="font-bold">Abbas</p> 
                                                <p>Chess Academy</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="flex-none hidden lg:block">
                                    <ul className="menu menu-horizontal pl-5 space-x-4">
                                    {/* Navbar menu content here */}
                                        <li>
                                            <NavLink className="text-gray-600 text-lg" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="text-gray-600 text-lg" to="/courses">
                                                Chess Courses
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                            <li>
                                <NavLink className="text-gray-600 text-lg" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-gray-600 text-lg" to="/courses">
                                    Chess Courses
                                </NavLink>
                            </li>
                        </ul>
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

const nav = () => {
    return(
        <>
            <div className="flex justify-between items-center">
            <div className="flex space-x-10 items-center">
            <div className="font-bold text-xl">
                            <NavLink to="/"><img src={IMAGES.logocrt} alt="logo" className=" w-12 h-12"/></NavLink>
                        </div>
                        <div className="dropdown md:hidden">
                            <div tabIndex={0} role="button" className="btn m-1"><GiHamburgerMenu className="h-6 w-6"/></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NavLink className="text-gray-600 text-lg" to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="text-gray-600 text-lg" to="/courses">
                                            Chess Courses
                                        </NavLink>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                        </div>
                        <div className=" hidden md:flex space-x-14 ">
                            <NavLink className="text-gray-600 hover:text-gray-900 text-lg" to="/">
                                Home
                            </NavLink>
                            <NavLink className="text-gray-600 hover:text-gray-900 text-lg" to="/courses">
                                Chess Courses
                            </NavLink>
                        </div>
                        </div>
                        </div>
        </>
    )
}