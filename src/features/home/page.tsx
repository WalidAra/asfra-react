import AddsSection from "./components/templates/adds-section";
import AppDownloadSection from "./components/templates/app-download-section";
import Footer from "./components/templates/footer";
import Header from "./components/templates/header";
import Hero from "./components/templates/hero";
import OffersContainer from "./components/templates/offers-container";

const AppLanding = () => {
  return (
    <div className="w-full min-h-svh bg-background ">
      <div className="container mx-auto max-w-7xl p-4">
        <Header />
        <main className="w-full space-y-8 ">
          <Hero />
          <AddsSection />
          <OffersContainer />
        </main>
      </div>
      <AppDownloadSection />
      <div className={"w-full bg-background"}>
        <Footer />
      </div>
    </div>
  );
};

export default AppLanding;
