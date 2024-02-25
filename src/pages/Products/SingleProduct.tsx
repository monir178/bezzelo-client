import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/productApi/getSingleProduct";
import Container from "@/components/ui/Container";
import CustomerLoading from "@/components/ui/CustomerLoading";
import { Button } from "@/components/ui/button";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useScrollToTop from "@/hooks/useScrollToTop";

const SingleProduct = () => {
  useScrollToTop();
  const { id } = useParams();

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct({ productId: id }),
  });

  const {
    category_name,
    capacity,
    color,
    description,
    occasion,
    price,
    size,
    img,
    detail_img,
    style,
    weight,
    fructose,
    glucose,
    moisture,
    sucrose,
    taste,
    undetermined,

    maltose,
    reducing_sugar,
  } = productData?.data?.data || {};

  if (isLoading) {
    return <CustomerLoading />;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Container className="pt-20 md:pt-24 lg:pt-32">
      <div
        data-aos="fade-down"
        className="flex flex-col gap-6 lg:flex-row justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-5/6 rounded-lg" src={img} alt="" />
            </PhotoView>
            <div className="flex gap-6 mt-4 ">
              {detail_img &&
                detail_img?.map((singleImg, index) => (
                  <PhotoView src={singleImg} key={index}>
                    <img
                      className="size-24 rounded-sm"
                      src={singleImg}
                      alt=""
                    />
                  </PhotoView>
                ))}
            </div>
          </PhotoProvider>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-3xl md:text-5xl font-bold">{category_name}</h2>
          <p className="text-secondary font-bold text-3xl"> ৳ {price}</p>
          <p className="text-gray-700 text-xl font-semibold">
            Cash on Delivery Available
          </p>

          <div>
            <h2 className="mt-8 lg:mt-16 mb-4 font-semibold text-secondary">
              Description:
            </h2>
            <ul className="list-none font-medium text-gray-700 tracking-wide">
              <li className="mb-2 font-semibold">{description}</li>

              {productData?.data?.data.category_id === 1 && (
                <>
                  <li>Color: {color}</li>
                  <li>Capacity: {capacity}</li>
                  <li>Size: {size}</li>
                  <li>Occasion: {occasion}</li>
                  <li>Weight: {weight}</li>
                  <li>Style: {style}</li>
                </>
              )}
              {productData?.data?.data.category_id === 2 && (
                <>
                  <li>Moisture: {moisture}</li>
                  <li>Sucrose: {sucrose}</li>
                  <li>Fructose: {fructose}</li>

                  <li>Maltose: {maltose}</li>
                  <li>Reducing Sugar: {reducing_sugar}</li>
                  <li>Taste: {taste}</li>
                  <li>glucose: {glucose}</li>
                  <li>Undetermined: {undetermined}</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex gap-6 tracking-wider">
            <Button
              style={{
                boxShadow:
                  "15px 9px 12px -4px rgba(0, 0, 0, 0.25), -2px 20px 12px -7px rgba(0, 0, 0, 0.2)",
              }}
              className="py-6 text-lg rounded-none  w-4/6 tracking-widest">
              BUY NOW
            </Button>
            <Button
              style={{
                boxShadow:
                  "15px 9px 12px -4px rgba(0, 0, 0, 0.25), -2px 20px 12px -7px rgba(0, 0, 0, 0.2)",
              }}
              className="rounded-none text-lg py-6 w-4/6 bg-black hover:text-black hover:bg-white tracking-widest">
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
