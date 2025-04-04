import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FlightTab from "./tabs/flight-tab";
import { Plane, Building2, Shield, Car, Palmtree, MapPin } from "lucide-react";
import HotelTab from "./tabs/hotel-tab";
import InsuranceTab from "./tabs/insurance-tab";
import HolydayTab from "./tabs/holyday-tab";
import ActivityTab from "./tabs/activity-tab";
import FlightHotelTab from "./tabs/flight-hotel-tab";

const menuItems = [
  {
    icon: <Plane className="h-5 w-5" />,
    content: <FlightTab />,
    label: "Flights",
    value: "flight",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    content: <HotelTab />,
    label: "Hotels",
    value: "hotel",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    content: <InsuranceTab />,
    label: "Insurance",
    value: "insurance",
  },
  {
    icon: <Car className="h-5 w-5" />,
    content: <></>,
    label: "Cars",
    value: "car",
  },
  {
    icon: <Palmtree className="h-5 w-5" />,
    content: <HolydayTab />,
    label: "Holidays",
    value: "holiday",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    content: <ActivityTab />,
    label: "Activities",
    value: "activity",
  },
  {
    icon: (
      <div className="flex items-center gap-1">
        <Plane className="h-4 w-4" />
        <Building2 className="h-4 w-4" />
      </div>
    ),
    content: <FlightHotelTab />,
    label: "Flight + Hotel",
    value: "flight_hotel",
  },
];

export default function HeroTabs() {
  return (
    <Card className="md:w-[90%] w-[98%] shadow-3xl shadow-shadow-500 relative">
      <Tabs defaultValue="flight">
        <CardHeader>
          <div className="absolute top-0 -translate-1/2 left-1/2">
            <TabsList className=" md:flex-nowrap w-full">
              {menuItems.map((item) => (
                <TabsTrigger
                  key={item.value}
                  className="gap-2"
                  value={item.value}
                >
                  {item.icon}
                  <span className="hidden md:inline-block">{item.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </CardHeader>
        <CardContent>
          {menuItems.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              {item.content}
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  );
}
