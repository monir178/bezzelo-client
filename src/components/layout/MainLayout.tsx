import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import whatsapp from "../../assets/icons/whatsapp.svg";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-0">
        <Link to="whatsapp://send?phone=+8801993123477" target="_blank">
          <img
            src={whatsapp}
            className="size-16 md:size-28 lg:size-40"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default MainLayout;
