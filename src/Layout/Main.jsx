import { Outlet } from "react-router-dom"
import NavBar from "../sharedComponents/NavBar/NavBar"
import Footer from "../sharedComponents/Footer/Footer"


const Main = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main