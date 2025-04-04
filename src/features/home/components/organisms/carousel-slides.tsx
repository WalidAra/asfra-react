import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Star } from "lucide-react";

type Props = {
  cities?: {
    name: string;
    value: string;
    component: string;
  }[];
  label: string;
};

const CarouselSlides = ({ cities = [], label }: Props) => {
  // If cities is empty, provide a default city
  const defaultCities =
    cities.length > 0
      ? cities
      : [{ name: "Default City", value: "default", component: "" }];

  return (
    <section className="w-full flex flex-col gap-6">
      <h2 className="font-heading mt-16 scroll-m-20 text-xl font-semibold">
        {label}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <Tabs defaultValue={defaultCities[0].value} className="w-full">
          <div className="flex justify-center w-full items-center">
            <TabsList className="bg-primary/10 mb-4 p-1.5 rounded-xl flex-wrap flex items-center gap-4">
              {defaultCities.map((city) => (
                <TabsTrigger
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-purple-800 data-[state=active]:backdrop-blur-lg rounded-lg hover:text-text-purple-500 transition-all text-purple-500 cursor-pointer"
                  key={city.value}
                  value={city.value}
                >
                  {city.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {defaultCities.map((city) => (
            <TabsContent key={city.value} value={city.value} className="w-full">
              <CarouselContent className="-ml-4">
                {Array.from({ length: 20 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/4">
                    <div
                      className="rounded-3xl cursor-pointer overflow-hidden bg-background border transition-all duration-300 
                       animate-in fade-in "
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for Hotel ${index + 1}`}
                    >
                      <div className="relative">
                        <div className="overflow-hidden">
                          <img
                            src={
                              "https://i.pinimg.com/474x/e2/b9/1f/e2b91fab38b3da7fef9b4fb6ce5caafb.jpg"
                            }
                            alt={`Hotel ${
                              index + 1
                            } - Luxury accommodation with swimming pool`}
                            width={380}
                            height={380}
                            className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-700
                            hover:scale-105"
                          />
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div
                            className="flex items-center gap-1.5 bg-black/70 text-white px-3 py-1.5 rounded-full
                            hover:scale-105 transition-transform duration-300"
                          >
                            <MapPin
                              size={16}
                              className="text-white"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium">Algeria</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 pb-5 px-2">
                        <h3 className="text-2xl font-bold mb-2 line-clamp-1">
                          Hotel name {index + 1}
                        </h3>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-emerald-500 font-semibold text-xl">
                              $99
                            </span>
                            <span className="text-gray-500 ml-1 text-sm">
                              /starting at
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold text-xl mr-1">4.5</span>
                            <Star
                              className="fill-yellow-400 text-yellow-400"
                              size={20}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </TabsContent>
          ))}
        </Tabs>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default CarouselSlides;
