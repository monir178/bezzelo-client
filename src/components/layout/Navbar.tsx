import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import bezzelo from "../../assets/icons/Bezzelo Logo-01.svg";
import { Button } from "../ui/button";
import { MenuSquare, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const animateNav = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "embla",
        ease: "easeInOut",
      },
    },
  };

  const menuItems = (
    <>
      <NavLink
        className="flex items-center hover:underline underline-offset-4"
        to="/home">
        Home
      </NavLink>
      <NavLink
        className="flex items-center hover:underline underline-offset-4"
        to="/cart">
        <ShoppingCart className="mr-1" /> Cart
      </NavLink>
      <NavLink
        className="flex items-center hover:underline underline-offset-4"
        to="/contact">
        Contact
      </NavLink>
      <Button className="bg-white text-primary rounded-3xl  px-8 max-w-32 hover:text-white hover:bg-orange-700 hover:transition-all">
        <NavLink to="/">Login</NavLink>
      </Button>
    </>
  );

  return (
    <motion.header
      variants={animateNav}
      initial="hidden"
      animate="visible"
      className="h-16 md:h-20  fixed w-full z-[999] bg-primary ">
      <nav className="max-w-[1300px] px-[20px]  w-full mx-auto h-full flex justify-between items-center  text-white">
        <img src={bezzelo} className="h-32" alt="" />
        <Input
          disabled
          type="search"
          className="bg-white text-secondary  rounded-3xl w-2/3 mx-4 md:w-1/3 ml-2 md:ml-auto"
          placeholder="Search"
        />
        <motion.ul className="space-x-3 md:space-x-6  font-semibold text-base hidden md:flex">
          {menuItems}
        </motion.ul>

        <div className="md:hidden">
          <MenuSquare
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {menuOpen && (
        <div className="flex bg-accent md:hidden font-semibold gap-y-4 py-4 ps-2 flex-col">
          {menuItems}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
