import OverlappingInput from "../../atoms/overlapping-input";
import FlightClassPassengerInput from "../../atoms/flight-class-passenger-input";
import { Button } from "@/components/ui/button";
const ActivityTab = () => {
  return (
    <div className="bg-button">
      <div className="w-full flex flex-wrap items-center gap-4">
        <div className="grid md:grid-cols-4 flex-1 items-center gap-4">
          <OverlappingInput
            label="Destination"
            placeholder="City or hotel name"
          />
          <OverlappingInput label="insurance type" placeholder="" />
          <OverlappingInput label="Check out" placeholder="" />
          <FlightClassPassengerInput />
        </div>
        <Button className="w-full md:w-auto">Search</Button>
      </div>
    </div>
  );
};

export default ActivityTab;
