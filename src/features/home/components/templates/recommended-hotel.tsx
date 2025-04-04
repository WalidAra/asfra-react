import CarouselSlides from "../organisms/carousel-slides";

const cities = [
  {
    name: "New York",
    value: "new-york",
    component: "Explore hotels in New York.",
  },
  { name: "Paris", value: "paris", component: "Discover the charm of Paris." },
  { name: "Tokyo", value: "tokyo", component: "Find your stay in Tokyo." },
  {
    name: "London",
    value: "london",
    component: "Stay in the heart of London.",
  },
  { name: "Sydney", value: "sydney", component: "Experience Sydney's beauty." },
];

type Props = {
  label: string;
};

const RecommendedHotel = ({label}:Props) => {
  return <CarouselSlides label={label} cities={cities} />;
};

export default RecommendedHotel;
