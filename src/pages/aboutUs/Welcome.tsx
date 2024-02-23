import welcome from "../../assets/about/Welcome.png";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-6 md:gap-10">
      <div>
        <img src={welcome} alt="" />
      </div>
      <div>
        <h4 className="mb-2">Welcome to Bezzelo</h4>
        <h5 className="mb-4">
          Your Destination for Necessities and Innovations!
        </h5>
        <p className="text-justify text-xl">
          At Bezzelo, we're more than just an e-commerce platform; we're a
          dynamic community driven by the belief that convenience and creativity
          can coexist harmoniously. Our journey began with a vision to
          revolutionize the way people shop for everyday essentials and to
          provide a platform where innovative ideas can thrive.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
