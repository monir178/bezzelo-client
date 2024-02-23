import entrepreneur from "../../assets/about/Entrepreneur.png";

const Entrepreneur = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-2">
        <img src={entrepreneur} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-1">
        <h4 className="mb-4">Creating New Entrepreneurs</h4>
        <p className="text-justify text-xl">
          With our "Be an Entrepreneur" platform, we're not just facilitating
          transactions - we're fostering innovation. We invite individuals with
          bold ideas to share their visions with us, and we provide guidance,
          mentorship, and funding to help turn those ideas into reality. From
          concept to execution, we're here to support aspiring entrepreneurs
          every step of the way, because we believe that together, we can create
          positive change in the world
        </p>
      </div>
    </div>
  );
};

export default Entrepreneur;
