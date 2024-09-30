"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(params.id);
      if (!fetchedProduct) {
        notFound(); // Trigger 404 if product not found
      } else {
        setProduct(fetchedProduct);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [params.id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      // If product already exists, update the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If product does not exist, add it to the cart
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to your cart!`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover mb-4" />
      <p>{product.description}</p>
      <p className="mt-2">Category: {product.category}</p>
      <p className="mt-2">Price: ${product.price}</p>
      <p className="mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 mt-4" 
        onClick={addToCart}
      >
        Add to Cart
      </button>
      <Link href="/cart" className="text-blue-600 hover:underline mt-2 block">
        View Cart
      </Link>
    </div>
  );
}

// Function to fetch a single product data
async function getProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
