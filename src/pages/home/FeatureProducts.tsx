import { getAllProducts } from "@/api/productApi/allProducts";
import Container from "@/components/ui/Container";
import CustomerLoading from "@/components/ui/CustomerLoading";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Products/ProductCard";

const FeatureProducts = () => {
  const {
    data: allProducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () => getAllProducts(),
  });

  if (isLoading) {
    return <CustomerLoading />;
  }

  if (isError) {
    return <p>Something is wrong</p>;
  }

  return (
    <Container className="mt-16">
      <div>
        <h2
          style={{ fontFamily: "'Roboto', sans-serif" }}
          className="text-center mb-6  mt-4 md:mt-20">
          Our Best Selling Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12  lg:gap-16 ">
          {allProducts?.data?.data?.map((product) => (
            <ProductCard
              key={product._id}
              singleCategory={product}></ProductCard>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <button className="px-20 rounded-lg py-1 text-white tracking-wider hover:bg-white shadow-xl hover:text-black text-md bg-black font-semibold">
            Load More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default FeatureProducts;
