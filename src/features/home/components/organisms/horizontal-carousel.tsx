import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HorizontalCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="w-full" >
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HorizontalCarousel;
