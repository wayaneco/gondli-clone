import { Metadata } from 'next';
import { BlogFilters } from './_components/filters';

export const metadata: Metadata = {
  title: 'Gondli - Blog',
};

export default function Blog() {
  return (
    <main className='pt-16.75 sm:pt-18.5'>
      <BlogFilters />
    </main>
  );
}
