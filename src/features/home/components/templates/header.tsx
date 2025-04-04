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


const menuItems = [
  { title: "Flights", url: "/flights", isLink: true },
  { title: "Hotels", url: "/hotels", isLink: true },
  { title: "Insurance", url: "/insurance", isLink: true },
  { title: "Flight + Hotel", url: "/flight-hotel", isLink: true },
  {
    title: "Car Services",
    dropdown: [
      { title: "Car Rental", url: "/car-rental", isLink: true },
      { title: "Airport Transfers", url: "/airport-transfers", isLink: true },
    ],
    isLink: false,
  },
  { title: "Holiday Packages", url: "/holiday-packages", isLink: true },
  { title: "Activities", url: "/activities", isLink: true },
];

const Header = () => {
  // React.useEffect(() => {
  //   const navbar = document.getElementById("navbar");

  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       navbar?.classList.add("py-2", "bg-[#121212]/95", "shadow-lg");
  //       navbar?.classList.remove("py-4", "bg-[#121212]/80");
  //     } else {
  //       navbar?.classList.add("py-4", "bg-[#121212]/80");
  //       navbar?.classList.remove("py-2", "bg-[#121212]/95", "shadow-lg");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <header
      id="navbar"
      className="w-full flex justify-between items-center py-4 "
    >
      <div className="flex items-center gap-4">
        <AppLogo />
      </div>

      <nav>
        <ul className="flex ">
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
                  {item.title}
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="text-muted-foreground hover:text-primary hover:bg-transparent"
                    >
                      {item.title}
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
                        <Link to={dropdownItem.url as string}>
                          {dropdownItem.title}
                        </Link>
                      </DropdownMenuItem>
                    )) ?? null}
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
