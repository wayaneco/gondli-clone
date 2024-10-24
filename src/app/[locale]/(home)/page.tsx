import React from 'react';
import HeroSection from './_components/sections/hero';
import ExploreSection from './_components/sections/explore';
import FeaturesSection from './_components/sections/features';
import SolutionsSection from './_components/sections/solutions';
import TestimonialsSection from './_components/sections/testimonials';
import WaitlistSection from './_components/sections/waitlist';
import GPSSection from './_components/sections/GPSSection'; // Import the GPS Section

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      <FeaturesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <WaitlistSection />
      <GPSSection /> {/* Include the GPS Section */}
    </main>
  );
}
