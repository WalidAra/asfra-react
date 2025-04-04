import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegBell } from "react-icons/fa";

const NotificationDropdown = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"secondary"} size={"icon"}>
          <FaRegBell className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default NotificationDropdown;
