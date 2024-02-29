import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import whatsapp from "../../assets/icons/whatsapp.svg";
import { motion } from "framer-motion";

const animateWhatsapp = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <motion.div
        variants={animateWhatsapp}
        whileHover="hover"
        className="fixed bottom-0 ">
        <Link to="whatsapp://send?phone=+8801576790198" target="_blank">
          <img src={whatsapp} className="size-16 md:size-28" alt="" />
        </Link>
      </motion.div>
    </div>
  );
};

export default MainLayout;
