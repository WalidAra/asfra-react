import RecommandedCarRentals from "./RecommandedCarRentals";
import RecommendedHotel from "./recommended-hotel";

const OffersContainer = () => {
  return (
    <div className="w-full">
      <RecommendedHotel label="Recommended Hotel" />
      <RecommandedCarRentals label="Recommanded Car Rentals" />
    </div>
  );
};

export default OffersContainer;
