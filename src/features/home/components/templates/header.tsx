import AppLogo from "@/components/atoms/app-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserNav from "../organisms/user-nav";
import { useTranslation } from "react-i18next";

const menuItems = [
  { title: "flights", url: "/flights", isLink: true },
  { title: "hotels", url: "/hotels", isLink: true },
  { title: "insurance", url: "/insurance", isLink: true },
  { title: "flightHotel", url: "/flight-hotel", isLink: true },
  {
    title: "carServices",
    dropdown: [
      { title: "carRental", url: "/car-rental", isLink: true },
      { title: "airportTransfers", url: "/airport-transfers", isLink: true },
    ],
    isLink: false,
  },
  { title: "holidayPackages", url: "/holiday-packages", isLink: true },
  { title: "activities", url: "/activities", isLink: true },
];
const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <header
      id="navbar"
      className="w-full flex justify-between items-center py-4"
    >
      <div className="flex items-center gap-4">
        <AppLogo />
      </div>

      <nav>
        <ul className="flex">
          {menuItems.map((item, index) => (
            <li key={index} className="relative hidden md:block">
              {item.isLink ? (
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:
                      "text-muted-foreground hover:text-primary hover:bg-transparent",
                  })}
                  to={item.url as string}
                >
                  {t(`app-landing.header.nav.${item.title}`)}
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="text-muted-foreground hover:text-primary hover:bg-transparent"
                    >
                      {t(`app-landing.header.nav.${item.title}`)}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06-.02L10 10.293l3.71-3.11a.75.75 0 111 .98l-4 3.333a.75.75 0 01-.98 0l-4-3.333a.75.75 0 01-.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown?.map((dropdownItem, index) => (
                      <DropdownMenuItem key={index}>
                        <Link to={dropdownItem.url}>
                          {t(`app-landing.header.nav.${dropdownItem.title}`)}
                        </Link>{" "}
                        {/* Translate dropdown items */}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <UserNav />
    </header>
  );
};

export default Header;
