import { Card } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

type Props = {
  image: string;
  ad: {
    title: string;
    description: string;
  };
};

const AdCard = ({ ad, image }: Props) => {
  return (
    <CarouselItem className=" rounded-3xl lg:basis-1/3">
      <div className="h-full w-full">
        <Card className="h-40 p-0 w-full grid grid-cols-2 gap-0 overflow-hidden">
          <div className="relative h-40 w-full">
            <img
              src={image || "/placeholder.svg"}
              alt={ad.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-secondary p-4 flex flex-col justify-center h-40">
            <h3 className=" font-bold text-xl leading-tight mb-1.5">
              {ad.title || "Daily 50 Lucky Winners get a Free Stay"}
            </h3>
            <p className="text-muted-foreground text-sm ">
              {ad.description || "Valid till: 15 Nov"}
            </p>
          </div>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default AdCard;
