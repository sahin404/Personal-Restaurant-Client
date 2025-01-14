import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import { IoCartOutline } from "react-icons/io5"

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
    }
    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/shop/offered">Our Shop</NavLink></li>
        {user && <>
            <li><NavLink to="/banner">
                <div className="relative w-fit">
                    <IoCartOutline className="text-3xl" />
                    <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">12</span>
                </div>
            </NavLink></li>
            <li className="text-xl bg-orange-500 p-2 rounded-xl">{user?.displayName}</li>
        </>

        }

    </>
    return (
        <div className="z-20">
            <div className=" max-w-7xl mx-auto fixed navbar z-10 bg-opacity-50 bg-[#111827] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <a className="flex gap-3 items-center pl-5">
                        <img src={logo} className="h-12" />
                        <div>
                            <h1 className="text-xl">Pizza</h1>
                            <h1>Restaurant</h1>
                        </div>

                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItems
                        }
                    </ul>
                    {
                        user ? <Link><div className="btn" onClick={handleLogout}>Logout</div></Link> : <Link to="/login"><div className="btn">Login</div></Link>
                    }

                </div>
            </div>
        </div>

    )
}

export default NavBar

