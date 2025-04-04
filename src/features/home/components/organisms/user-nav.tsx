import { cn } from "@/lib/utils";
import NotificationDropdown from "./notification-dropdown";
import UserDropdown from "./user-dropdown";
import { useAuth } from "@/hooks";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserNav = () => {
  const { accessToken } = useAuth();

  return (
    <div className="flex items-center gap-4">
      <div className={accessToken ? undefined : "hidden"}>
        <NotificationDropdown />
        <UserDropdown />
      </div>

      <div
        className={cn(
          "flex items-center gap-2",
          accessToken ? "hidden" : undefined
        )}
      >
        <Link
          to={"/auth/sign-in"}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Sign in
        </Link>
        <Link
          to={"/auth/sign-up"}
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default UserNav;
