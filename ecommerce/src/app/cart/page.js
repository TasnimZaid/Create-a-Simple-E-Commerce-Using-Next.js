"use client";

import React from 'react';

const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="mb-2">
              <h2 className="text-xl">{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <hr className="my-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
