import story from "../../assets/about/Story.png";

const Story = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-2">
        <img src={story} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-1">
        <h4 className="mb-4">Our Story</h4>
        <p className="text-justify text-xl">
          In a world where time is of the essence and convenience is paramount,
          we saw an opportunity to create a space where individuals could access
          a wide array of necessary items with ease. But we didn't stop there.
          We also envisioned a platform where aspiring entrepreneurs could turn
          their ideas into reality, with the support and resources they need to
          succeed. And thus, Bezzelo was born.
        </p>
      </div>
    </div>
  );
};

export default Story;
