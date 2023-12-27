import {NavLink, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import IMAGES from "../images/Images";
import { scroller } from "react-scroll";

function RootLayout() {

    // const handleContactSection = () => {
    //     scroller.scrollTo('contactSection', {
    //         duration: 1500,
    //         delay: 100,
    //         smooth: 'easeInOutQuint',
    //         // ... other options
    //       });
    // }

    return (  
        <>
            <nav className="py-4 px-14 shadow-md">
                <div className="flex justify-between items-center">
                <div className="flex space-x-10 items-center">
                    <div className="font-bold text-xl">
                        <NavLink to="/"><img src={IMAGES.logocrt} alt="logo" className=" w-12 h-12"/></NavLink>
                    </div>
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn m-1"><GiHamburgerMenu className="h-6 w-6"/></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink className="text-gray-600" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-gray-600" to="/courses">
                                        Chess Courses
                                    </NavLink>
                                </li>
                                <li>
                                </li>
                            </ul>
                    </div>
                    <div className=" hidden md:flex space-x-14 ">
                        <NavLink className="text-gray-600 hover:text-gray-900" to="/">
                            Home
                        </NavLink>
                        <NavLink className="text-gray-600 hover:text-gray-900" to="/courses">
                            Chess Courses
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