import { getCategoryProducts } from "@/api/productApi/categoryProducts";
import Container from "@/components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CustomerLoading from "@/components/ui/CustomerLoading";

const Products = () => {
  const { id } = useParams();

  const {
    data: categoryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategoryProducts({ categoryId: id }),
  });

  if (isLoading) {
    return <CustomerLoading />;
  }
  if (isError) return <div>Error fetching data</div>;

  return (
    <Container className="pt-20 lg:pt-32">
      {categoryData?.data?.data?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12  lg:gap-20 ">
          {categoryData?.data?.data?.map((category) => (
            <ProductCard
              key={category._id}
              singleCategory={category}></ProductCard>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-primary">Coming Soon...</h1>
      )}
    </Container>
  );
};

export default Products;
