import value from "../../assets/about/Value.png";

const Values = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-2">
        <img src={value} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-1">
        <h4 className="mb-4">Our Values</h4>
        <p className="text-justify text-xl">
          Integrity, inclusivity, and innovation are the cornerstones of our
          business. We believe in conducting ourselves with honesty and
          transparency, fostering a diverse and inclusive community, and
          continuously pushing the boundaries of what's possible. By upholding
          these values, we strive to build trust with our customers, partners,
          and fellow community members.
        </p>
      </div>
    </div>
  );
};

export default Values;
