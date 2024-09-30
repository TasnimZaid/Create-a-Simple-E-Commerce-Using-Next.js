import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/products" className="mr-4">Products</Link>
      <Link href="/cart" className="mr-4">Cart</Link>
    </nav>
  );
};

export default Navbar;
