import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../sharedComponents/NavBar/NavBar";
import Footer from "../sharedComponents/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const excludedRoutes = ["/login", "/signup"]; // Routes where NavBar and Footer should not appear
  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  return (
    <div>
      {!isExcludedRoute && <NavBar />}
      <Outlet />
      {!isExcludedRoute && <Footer />}
    </div>
  );
};

export default Main;
