import HeroSection from './_components/sections/hero';
import ExploreSection from './_components/sections/explore';
import FeaturesSection from './_components/sections/features';
import SolutionsSection from './_components/sections/solutions';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      <FeaturesSection />
      <SolutionsSection />
    </main>
  );
}
