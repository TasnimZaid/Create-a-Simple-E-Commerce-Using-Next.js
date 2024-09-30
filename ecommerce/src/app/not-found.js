import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p className="mt-4">
        Oops! The page you are looking for doesn't exist. 
      </p>
      <Link href="/" className="text-blue-500 mt-2">Go back to Home</Link>
    </div>
  );
}
