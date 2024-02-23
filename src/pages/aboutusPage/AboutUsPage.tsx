import Container from "@/components/ui/Container";
import Welcome from "../aboutUs/Welcome";
import Story from "../aboutUs/Story";
import Promise from "../aboutUs/Promise";
import Values from "../aboutUs/Values";
import Empower from "../aboutUs/Empower";
import Entrepreneur from "../aboutUs/Entrepreneur";
import useScrollToTop from "@/hooks/useScrollToTop";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/useZoomIn";

const AboutUsPage = () => {
  useScrollToTop();

  return (
    <Container className="pt-20 md:pt-24 lg:pt-32  md:space-y-10 w-full lg:w-3/5 mx-auto">
      <motion.div
        className="space-y-20"
        variants={useFadeIn()}
        initial="hidden"
        animate="visible">
        <Welcome />

        <Story />

        <Promise />
        <Values />
        <Empower />
        <Entrepreneur />
      </motion.div>
    </Container>
  );
};

export default AboutUsPage;
