import HeroBackground from './_components/hero-background';

export default async function Home() {
  return (
    <main>
      <div className='sm:pt-18 relative h-screen w-full pt-16.75'>
        <HeroBackground />
      </div>
    </main>
  );
}
