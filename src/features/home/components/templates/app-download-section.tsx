import { Button } from "@/components/ui/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple, FaHandHoldingHeart } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { FaHandHoldingDollar } from "react-icons/fa6";

export default function AppDownloadSection() {
  return (
    <section className="bg-secondary mt-20 w-full flex justify-center items-center flex-wrap md:flex-nowrap py-10 ">
      <div className="flex flex-wrap px-4 md:p-0 items-center max-w-6xl justify-between gap-8">
        <Card className="w-full md:w-auto md:max-w-xs p-3 h-32 flex items-center justify-center shadow-xs border-0x x ">
          <CardContent className="flex items-center px-3 gap-4">
            <FaHandHoldingHeart className="size-20" />
            <div className="flex flex-col space-y-1">
              <h3 className="font-heading text-xl font-semibold tracking-tight ">
                24x7 Help
              </h3>
              <p className="text-muted-foreground">
                If we fall short of your expectation in any way, let us know
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-auto md:max-w-xs p-3  h-32 flex items-center justify-center shadow-xs border-0x  x ">
          <CardContent className="flex items-center px-3 gap-4">
            <FaHandHoldingDollar className="size-20" />
            <div className="flex flex-col space-y-1">
              <h3 className="font-heading text-xl font-semibold tracking-tight ">
                Deploy to Vercel
              </h3>
              <p className="text-muted-foreground">
                All refunds come with no questions asked guarantee
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col w-full md:w-auto">
          <h3 className="font-heading text-xl font-semibold tracking-tight mb-4">
            Download our app
          </h3>

          <div className="gap-4 flex flex-col md:flex-row items-center w-full">
            <Button className="h-14 gap-2.5 w-full md:w-42 text-xs">
              <FaApple className="size-9" />
              <div className="flex-flex-col">
                <span>Download on the</span>
                <p>App Store</p>
              </div>
            </Button>
            <Button className="h-14 gap-2.5 w-full md:w-42 text-xs">
              <IoLogoGooglePlaystore className="size-9" />
              <div className="flex-flex-col">
                <span>GET IT ON</span>
                <p>Google Play</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
