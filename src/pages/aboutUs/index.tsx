import Container from "@/components/ui/Container";
import Welcome from "./Welcome";
import Story from "./Story";

const AboutUs = () => {
  return (
    <Container className="space-y-20 w-full lg:w-10/12 mx-auto">
      <h2 className="text-center tracking-widest mt-24 font-semibold">
        About US
      </h2>
      <Welcome />
      <Story />
    </Container>
  );
};

export default AboutUs;
