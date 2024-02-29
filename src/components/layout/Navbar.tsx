import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import bezzelo from "../../assets/icons/Bezzelo Logo-01.svg";
import { Button } from "../ui/button";
import { MenuSquare, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { AuthContext } from "@/Contexts/AuthProviderComponent";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const animateNav = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.6,

        ease: "easeInOut",
      },
    },
  };

  const animateNavLink = {
    hover: {
      scale: 1.1,
      originX: 0,
      transition: {
        ease: "easeOut",
        stiffness: 300,
      },
    },
  };

  const menuItems = (
    <>
      <motion.li variants={animateNavLink} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/">
          Home
        </NavLink>
      </motion.li>
      {/* <motion.li variants={animateNavLink} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/cart">
          <ShoppingCart className="mr-1" /> Cart
        </NavLink>
      </motion.li> */}
      <motion.li variants={animateNavLink} whileHover="hover">
        <NavLink
          className="flex items-center hover:underline underline-offset-4"
          to="/aboutus">
          About Us
        </NavLink>
      </motion.li>
      {!user ? (
        <motion.li variants={animateNavLink} whileHover="hover">
          <Button className="bg-white text-primary rounded-3xl  px-7 max-w-32 hover:text-white border md:border-none border-primary hover:bg-orange-700 hover:transition-all text-lg">
            <NavLink to="/login">Login</NavLink>
          </Button>
        </motion.li>
      ) : (
        <motion.li variants={animateNavLink} whileHover="hover">
          <Button
            onClick={handleLogOut}
            className="bg-red-600 text-white rounded-3xl  px-8 max-w-32 hover:text-secondary hover:bg-white hover:transition-all">
            Log out
          </Button>
        </motion.li>
      )}
    </>
  );

  return (
    <header className="h-16 md:h-20  fixed w-full z-[999] bg-primary ">
      <motion.nav
        variants={animateNav}
        initial="hidden"
        animate="visible"
        className="max-w-[1300px] px-[20px]  w-full mx-auto h-full flex justify-between items-center   text-white">
        <Link to="/">
          <img src={bezzelo} className="size-20 md:size-24 lg:size-32" alt="" />
        </Link>
        <Input
          disabled
          type="search"
          className="bg-white text-secondary h-8 lg:h-10 rounded-3xl w-6/12 mx-4 md:w-4/12 lg:w-1/3 ml-2 md:ml-auto"
          placeholder="Search"
        />
        <motion.ul className="space-x-3 md:space-x-6  font-semibold text-base items-center hidden md:flex">
          {menuItems}
        </motion.ul>

        <div className="md:hidden">
          <MenuSquare
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>
      </motion.nav>
      {menuOpen && (
        <div className="grid grid-cols-1 w-3/6 ml-auto rounded-lg bg-white border-2 border-t-0 border-r-0 text-primary md:hidden font-semibold py-4 px-2 list-none">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="space-y-4 mx-auto">
            {menuItems}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
