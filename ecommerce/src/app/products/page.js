import axios from 'axios';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-2">
            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Function to fetch all products
async function getProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
