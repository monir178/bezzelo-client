import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { animateCardImage } from "../home/CategoryCardSection";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ singleCategory }) => {
  const { _id, category_name, price, img } = singleCategory;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      className="bg-white rounded-t-xl"
      style={{
        boxShadow: isHovered
          ? "20px 15px 15px -4px rgba(0, 0, 0, 0.2), -5px 5px 15px -7px rgba(0, 0, 0, 0.2)"
          : "none",
        transition: "all 0.3s ease-in-out",
      }}>
      <div>
        <Link to={`/product/${_id}`}>
          <motion.img
            variants={animateCardImage}
            whileHover="hover"
            src={img}
            className="h-72 lg:h-[340px] mb-4  mx-auto p-8"
            alt=""
          />
          <h3 className="text-gray-700 ps-6 mb-1">{category_name}</h3>
          <p className="text-primary font-bold ps-6 text-lg ">৳ {price}</p>
        </Link>

        <div className="flex mt-6 tracking-wider">
          <Button className="rounded-none w-full tracking-widest">
            BUY NOW
          </Button>
          <Button className="rounded-none w-full bg-black hover:text-black hover:bg-gray-300 tracking-widest">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
