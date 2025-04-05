import { cn } from "@/lib/utils";
import NotificationDropdown from "./notification-dropdown";
import UserDropdown from "./user-dropdown";
import { useAuth } from "@/hooks";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserNav = () => {
  const { accessToken } = useAuth();
  const { t } = useTranslation(); // Initialize useTranslation

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
          {t(`app-landing.header.userNav.signIn`)}
        </Link>
        <Link
          to={"/auth/sign-up"}
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          {t(`app-landing.header.userNav.signUp`)}
        </Link>
      </div>
    </div>
  );
};

export default UserNav;
