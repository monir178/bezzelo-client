import promise from "../../assets/about/Promise.png";

const Promise = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-1">
        <img src={promise} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-2">
        <h4 className="mb-4">Our Promise</h4>
        <p className="text-justify text-xl">
          At Bezzelo, our promise to you is simple: a seamless shopping
          experience that exceeds your expectations every step of the way. From
          our carefully curated selection of products to our user-friendly
          interface, we're dedicated to making your shopping journey as
          enjoyable and hassle-free as possible. With secure transactions,
          prompt delivery, and exceptional customer service, we aim to make
          every interaction with Bezzelo a delight.
        </p>
      </div>
    </div>
  );
};

export default Promise;
