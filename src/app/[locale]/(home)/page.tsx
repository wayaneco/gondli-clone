import DigitalContent from './_components/sections/DigitalContent/DigitalContent';
import ExploreDeals from './_components/sections/ExploreDeals/ExploreDeals';
import HeroSection from './_components/sections/hero';
import LocationServices from './_components/sections/LocationServices/LocationServices';
import MissedStories from './_components/sections/MissedStories/MissedStories';
import PastBooking from './_components/sections/PastBooking/PastBooking';
import Recommended from './_components/sections/Recommended/Recommended';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissedStories />
      <PastBooking />
      <ExploreDeals />
      <LocationServices />
      <DigitalContent />
      <Recommended />
    </main>
  );
}
