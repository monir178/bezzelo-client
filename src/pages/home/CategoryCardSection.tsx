import Container from "@/components/ui/Container";
import { useGetCategories } from "@/hooks/useGetCategories";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomerLoading from "@/components/ui/CustomerLoading";

export const animateCardImage = {
  hover: {
    scale: 1.22,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      stiffness: 200,
    },
  },
};

const CategoryCardSection = () => {
  const { data: categories, isLoading, isError } = useGetCategories();

  const categorySection = {
    hidden: {
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
        delayChildren: 0.19,
      },
    },
  };

  const categoryChildren = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container className="my-10 flex justify-center">
      <div>
        <h2 className="text-center mb-4 mt:4 lg:mt-10">Categories</h2>
        {isLoading ? (
          <CustomerLoading />
        ) : isError ? (
          <div>Error fetching data</div>
        ) : (
          <motion.div
            variants={categorySection}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10 ">
            {categories.map((category, index) => (
              <Link
                key={category._id || index}
                to={`/categories/${category.category_id}`}>
                <motion.div
                  variants={categoryChildren}
                  className="flex flex-col items-center bg-white p-6 pb-2 rounded-xl shadow-xl border-2 border-gray-200 ">
                  <motion.img
                    variants={animateCardImage}
                    whileHover="hover"
                    src={category.img}
                    className="mx-auto hover:brightness-50 rounded-lg"
                  />
                  <h3 className="text-center mt-4 text-secondary">
                    {category.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default CategoryCardSection;
