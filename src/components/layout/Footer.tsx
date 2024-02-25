import { Globe, PersonStanding } from "lucide-react";
import Container from "../ui/Container";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { FaTiktok } from "react-icons/fa";
import instaIc from "../../assets/icons/insta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <Container className="mt-12  max-w-[1260px] mx-auto pb-10 text-black ">
        <div className="grid grid-cols-2 lg:grid-cols-3 pt-10 gap-y-16 uppercase tracking-wide">
          <div>
            <h5 className="font-semibold mb-2">Shop Categories</h5>
            <ul className="list-none  space-y-1">
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
          <div className="lg:ml-20">
            <h5 className="font-semibold mb-2 ">Customer Service</h5>
            <ul className="list-none  space-y-1">
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
          <div className="normal-case lg:justify-self-end">
            <h5 className="font-semibold mb-2 uppercase">Contact Us</h5>
            <ul className="list-none  space-y-1">
              <li className="flex gap-4 items-center">
                <Link to="https://www.facebook.com/bezzelobd" target="_blank">
                  <FaFacebook className="size-6 text-blue-700" />
                </Link>
                <Link to="whatsapp://send?phone=+8801993123477" target="_blank">
                  <IoLogoWhatsapp className="size-6 text-green-600" />
                </Link>
                <img className="size-8" src={instaIc} alt="" />
                <FaTiktok className="size-6" />
              </li>
              <li>
                <p className="leading-4">
                  <small>bezzelobd@gmail.com</small> <br />
                  <small>+8801576790198</small>
                </p>
              </li>
              <li>
                <p className="uppercase mt-2 font-semibold">About Us</p>
                <p className="max-w-[25ch] leading-4 text-justify">
                  <small>
                    At our store, we are dedicated to providing the latest and
                    greatest fashion products and accessories to our customers.
                    With a wide selection of dresses, clothes,bags and other
                    accessories.
                  </small>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-500" />

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="md:text-right mb-4 md:mb-0">
            <small> @ 2024. All rights reserved.</small>
          </div>
          <div className="flex flex-wrap justify-between gap-6">
            <small>Terms</small>
            <small>Privacy</small>
            <small>Contact</small>
            <div className="flex gap-2">
              <Globe /> <small>EN</small>
            </div>

            <PersonStanding />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
