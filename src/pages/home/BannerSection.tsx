import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { bannerImages } from "./BannerContent";

const BannerSection = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
        <CarouselContent>
          {bannerImages?.map((image) => (
            <CarouselItem key={image.id}>
              <img
                className="w-full h-auto mx-auto"
                src={image.img}
                alt="Slide 2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BannerSection;
