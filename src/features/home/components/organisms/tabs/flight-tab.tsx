import OverlappingInput from "../../atoms/overlapping-input";
import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "../../molecules/date-picker-with-presents";
import FlightClassPassengerInput from "../../atoms/flight-class-passenger-input";
import { Checkbox } from "@/components/ui/checkbox";

const FlightTab = () => {
  return (
    <div className="w-full flex flex-col mt-4 gap-6 items-center justify-center">
      <div className="flex w-full justify-center flex-wrap gap-4 md:justify-between items-center ">
        <div className="flex z-40 gap-2">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              One way
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Round trip
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Multi-city
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Non-stop
          </label>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-wrap items-center gap-4">
          <div className="grid md:grid-cols-4 flex-1 items-center gap-4">
            <OverlappingInput
              label="Flying from "
              placeholder="City or airport"
            />
            <OverlappingInput
              label="Flying to "
              placeholder="City or airport"
            />
            <DatePickerWithPresets />
            <FlightClassPassengerInput />
          </div>
          <Button className="w-full md:w-auto">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default FlightTab;
