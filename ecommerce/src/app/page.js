import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Simple E-Commerce</title>
        <meta name="description" content="Welcome to our Simple E-Commerce site" />
      </Head>
      <h1 className="text-3xl font-bold">Welcome to Simple E-Commerce!</h1>
      <nav className="mt-4">
        <ul>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}
