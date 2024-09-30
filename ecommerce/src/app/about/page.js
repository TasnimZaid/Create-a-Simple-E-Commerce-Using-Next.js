import Image from 'next/image';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Simple E-Commerce</title>
        <meta name="description" content="Learn more about our e-commerce store" />
      </Head>
      <div className="p-4">
        <h1 className="text-3xl mb-4">About Us</h1>
        <Image src="/image.jpg" alt="Store Image" width={500} height={300} />
        <p className="mt-4">
          We are an e-commerce store dedicated to bringing you the best products at the best prices.
        </p>
      </div>
    </>
  );
}
