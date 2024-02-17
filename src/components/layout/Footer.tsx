import { Euro, Globe, PersonStanding } from "lucide-react";
import Container from "../ui/Container";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="mt-12 bg-gray-800 max-w-[1260px] mx-auto pb-10 text-white font-thin">
      <div className=" grid grid-cols-2 lg:grid-cols-3 justify-items-start  py-10 gap-y-16">
        <div>
          <h5 className="font-semibold mb-2">Shop Categories</h5>
          <ul className="list-none font-thin space-y-2">
            <li>
              <small>Men</small>
            </li>
            <li>
              <small>Women</small>
            </li>
            <li>
              <small>Electronics</small>
            </li>
            <li>
              <small>Kids</small>
            </li>
            <li>
              <small>Accessories</small>
            </li>
            <li>
              <small>Home Decor</small>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Customer Service</h5>
          <ul className="list-none font-thin space-y-2">
            <li>
              <small>Contact Us</small>
            </li>
            <li>
              <small>Shipping Policy</small>
            </li>
            <li>
              <small>Returns and Exchange</small>
            </li>
            <li>
              <small>Watches</small>
            </li>
            <li>
              <small>Terms & Conditions</small>
            </li>
            <li>
              <small>FAQs</small>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">About Us</h5>
          <ul className="list-none font-thin space-y-2">
            <li>
              <p className="max-w-[25ch] leading-4">
                <small>
                  At our store, we are dedicated to providing the latest and
                  greatest fashion products and accessories to our customers.
                  With a wide selection of dresses, clothes,bags and other
                  accessories.
                </small>
              </p>
            </li>
            <li className="flex gap-4">
              <FaFacebook />
              <IoLogoWhatsapp />
              <GrInstagram />
              <FaTiktok />
            </li>
            <li>
              <p className="leading-4">
                <small>bezzelobd@gmail.com</small> <br />
                <small>+8801576790198</small>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-gray-500" />

      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:text-right mb-4 md:mb-0">
          <small> @ 2023. All rights reserved.</small>
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          <small>Terms</small>
          <small>Privacy</small>
          <small>Contact</small>
          <div className="flex gap-2">
            <Globe /> <small>EN</small>
          </div>
          <div className="flex gap-2">
            <Euro /> <small>EUR</small>
          </div>
          <PersonStanding />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
