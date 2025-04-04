import { ChevronLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button.tsx";
import AppLogo from "@/components/atoms/app-logo";
// import { withoutAuth } from "@/components/guards";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const year = new Date().getFullYear();
  return (
    <main className="grid min-h-svh lg:grid-cols-2 p-4">
      <div className="relative flex-col hidden lg:flex bg-primary rounded-xl p-8 gap-10">
        <div className={"flex flex-col gap-2 text-primary-foreground"}>
          <p className={"font-medium text-3xl "}>
            Fancy description of the app
          </p>
          <p>Enter your credentials to access your account </p>
        </div>
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1588345921523-c2dcdb7f1dcd%3Fw%3D800%26dpr%3D2%26q%3D80&w=1920&q=75"
              alt="overview-dashboard"
              className="rounded-md object-cover pointer-events-none"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="flex flex-col justify-between md:p-4">
        <div className="flex w-full items-center justify-between md:px-8 px-0">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md ">
              <AppLogo />
            </div>
          </Link>

          <Link
            to={"/"}
            className={buttonVariants({
              variant: "ghost",
              className: "text-muted-foreground hover:bg-transparent gap-0 p-0",
            })}
          >
            <ChevronLeft className={"size-5"} />
            <p>Back to the website</p>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className={"w-full max-w-sm 2xl:max-w-[26rem]"}>{children}</div>
        </div>

        <div>
          <p className={"text-center text-muted-foreground text-sm"}>
            {year} All rights reserved{" "}
          </p>
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
