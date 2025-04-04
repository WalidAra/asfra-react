import * as React from "react";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AdCard from "../molecules/ad-card";

const offers = [
  {
    title: "Book & Enjoy",
    description: "up to 3 nights!",
    image:
      "https://i.pinimg.com/474x/34/eb/75/34eb75d5d66fc39656f322ac93bc2206.jpg",
  },
  {
    title: "Summer Special",
    description: "20% off on all bookings!",
    image: "https://i.pinimg.com/474x/bc/b2/b8/bcb2b84cbe0fe621cb5660667c3dfe76.jpg",
  },
  {
    title: "Winter Wonderland",
    description: "Exclusive winter deals!",
    image: "https://i.pinimg.com/474x/20/87/8a/20878a59b3c492b1fec78f91c7a8471c.jpg",
  },
  {
    title: "Book & Enjoy",
    description: "up to 3 nights!",
    image:
      "https://i.pinimg.com/474x/34/eb/75/34eb75d5d66fc39656f322ac93bc2206.jpg",
  },
  {
    title: "Summer Special",
    description: "20% off on all bookings!",
    image: "https://i.pinimg.com/474x/bc/b2/b8/bcb2b84cbe0fe621cb5660667c3dfe76.jpg",
  },
  {
    title: "Winter Wonderland",
    description: "Exclusive winter deals!",
    image: "https://i.pinimg.com/474x/20/87/8a/20878a59b3c492b1fec78f91c7a8471c.jpg",
  },
  {
    title: "Book & Enjoy",
    description: "up to 3 nights!",
    image:
      "https://i.pinimg.com/474x/34/eb/75/34eb75d5d66fc39656f322ac93bc2206.jpg",
  },
  {
    title: "Summer Special",
    description: "20% off on all bookings!",
    image: "https://i.pinimg.com/474x/bc/b2/b8/bcb2b84cbe0fe621cb5660667c3dfe76.jpg",
  },
  {
    title: "Winter Wonderland",
    description: "Exclusive winter deals!",
    image: "https://i.pinimg.com/474x/20/87/8a/20878a59b3c492b1fec78f91c7a8471c.jpg",
  },
  {
    title: "Book & Enjoy",
    description: "up to 3 nights!",
    image:
      "https://i.pinimg.com/474x/34/eb/75/34eb75d5d66fc39656f322ac93bc2206.jpg",
  },
  {
    title: "Summer Special",
    description: "20% off on all bookings!",
    image: "https://i.pinimg.com/474x/bc/b2/b8/bcb2b84cbe0fe621cb5660667c3dfe76.jpg",
  },
  {
    title: "Winter Wonderland",
    description: "Exclusive winter deals!",
    image: "https://i.pinimg.com/474x/20/87/8a/20878a59b3c492b1fec78f91c7a8471c.jpg",
  },
];

const AddsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <section className="w-full mt-40">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {offers.map((offer, index) => (
            <AdCard
              key={index}
              ad={{ description: offer.description, title: offer.title }}
              image={offer.image}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AddsSection;
