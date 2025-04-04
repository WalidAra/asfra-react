
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type PassengerType = "adults" | "children" | "infants";

type PassengerCount = {
  adults: number;
  children: number;
  infants: number;
};

type FlightClass = "economy" | "firstClass";

const flightClassLabels: Record<FlightClass, string> = {
  economy: "Economy",
  firstClass: "First Class",
};

const passengerLabels: Record<PassengerType, string> = {
  adults: "Adults",
  children: "Children",
  infants: "Infants",
};

const passengerDescriptions: Record<PassengerType, string> = {
  adults: "Age 12+",
  children: "Age 2-11",
  infants: "Under 2",
};

const FlightClassPassengerInput = () => {
  const [passengerCount, setPassengerCount] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [flightClass, setFlightClass] = useState<FlightClass>("economy");
  const [isOpen, setIsOpen] = useState(false);

  const totalPassengers =
    passengerCount.adults + passengerCount.children + passengerCount.infants;

  const handleIncrement = (type: PassengerType) => {
    setPassengerCount((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleDecrement = (type: PassengerType) => {
    if (type === "adults" && passengerCount.adults <= 1) return;
    if (passengerCount[type] <= 0) return;

    setPassengerCount((prev) => ({
      ...prev,
      [type]: prev[type] - 1,
    }));
  };

  const getSummaryText = () => {
    const classText = flightClassLabels[flightClass];
    const passengerText =
      totalPassengers === 1 ? "1 passenger" : `${totalPassengers} passengers`;

    return `${classText} · ${passengerText}`;
  };

  return (
    <div className="w-full">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className="w-full justify-between text-left relative transition-all"
          >
            <label className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
              Flight class and passengers
            </label>
            <span className="text-xs text-muted-foreground">
              {getSummaryText()}
            </span>
            <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-68 p-0 shadow-lg border-gray-200"
          align="start"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white p-3 border-b">
            <h3 className="font-semibold text-lg text-gray-800">Cabin Class</h3>
            <div className="grid gap-3 grid-cols-2 mt-3">
              {(Object.keys(flightClassLabels) as FlightClass[]).map(
                (classKey) => (
                  <div
                    key={classKey}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg border-2 cursor-pointer transition-all",
                      flightClass === classKey
                        ? "border-gray-800 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => setFlightClass(classKey)}
                  >
                    <span
                      className={cn(
                        "text-sm font-medium",
                        flightClass === classKey
                          ? "text-gray-900"
                          : "text-gray-600"
                      )}
                    >
                      {flightClassLabels[classKey]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="px-4 py-2">
            <h3 className="font-semibold text-lg text-gray-800 ">Passengers</h3>

            {(Object.keys(passengerLabels) as PassengerType[]).map((type) => (
              <div
                key={type}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-base font-medium text-gray-800">
                    {passengerLabels[type]}
                  </p>
                  <p className="text-sm text-gray-500">
                    {passengerDescriptions[type]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-full border-2 transition-all",
                      (type === "adults" && passengerCount.adults <= 1) ||
                        passengerCount[type] <= 0
                        ? "border-gray-200 text-gray-300"
                        : "border-gray-300 text-gray-700 hover:border-gray-800 hover:text-gray-900"
                    )}
                    onClick={() => handleDecrement(type)}
                    disabled={
                      (type === "adults" && passengerCount.adults <= 1) ||
                      passengerCount[type] <= 0
                    }
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <span className="w-6 text-center font-medium text-gray-800">
                    {passengerCount[type]}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-full border-2 transition-all",
                      totalPassengers >= 9
                        ? "border-gray-200 text-gray-300"
                        : "border-gray-300 text-gray-700 hover:border-gray-800 hover:text-gray-900"
                    )}
                    onClick={() => handleIncrement(type)}
                    disabled={totalPassengers >= 9}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
            ))}

            <div className=" pt-5 border-t">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FlightClassPassengerInput;
