import { FaCalendar, FaHome } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { MdOutlineHomeWork } from "react-icons/md"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="flex gap-10">
            <div className="bg-[#D1A054] w-64 min-h-screen " >
                <ul className="menu text-xl">

                    <li><NavLink to="/dashboard/userHome" >
                        <MdOutlineHomeWork />
                        UserHome
                    </NavLink></li>
                    <li><NavLink to="/dashboard/carts" >
                        <FaHome />
                        Carts
                    </NavLink></li>

                    <li><NavLink to="/dashboard/reservation" >
                        <FaCalendar />
                        Reservation
                    </NavLink></li>
                    <hr className="mt-5" />
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Go to Home
                    </NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard