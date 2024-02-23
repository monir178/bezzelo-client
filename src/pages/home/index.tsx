import Container from "@/components/ui/Container";
import BannerSection from "./BannerSection";
import CategoryCardSection from "./CategoryCardSection";
import FeatureProducts from "./FeatureProducts";
import AboutUs from "../aboutUs";

const Home = () => {
  return (
    <Container className="pt-20 md:pt-24">
      <BannerSection />
      <CategoryCardSection />
      <FeatureProducts />
      <AboutUs />
    </Container>
  );
};

export default Home;
