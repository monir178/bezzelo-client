import empower from "../../assets/about/Empower.png";

const Empower = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-1">
        <img src={empower} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-2">
        <h4 className="mb-4">Empowering Sellers</h4>
        <p className="text-justify text-xl">
          At Bezzelo, we understand that our success is intrinsically linked to
          the success of our sellers. That's why we provide a platform where
          entrepreneurs of all backgrounds can showcase their products to a
          global audience. Whether you're a small business owner or a budding
          artisan, we offer the tools, resources, and support you need to thrive
          in the competitive world of e-commerce.
        </p>
      </div>
    </div>
  );
};

export default Empower;
