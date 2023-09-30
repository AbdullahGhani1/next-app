import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl ">Home Page</h1>
      <Link
        href="/users"
        className="text-2xl p-4 text-blue-500 hover:text-red-600"
      >
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
