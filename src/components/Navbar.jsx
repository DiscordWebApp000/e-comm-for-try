'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import React Icons for user and shopping cart
import CartDropdown from './CartDropdown'; // Import the CartDropdown component

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold hover:text-blue-400">
          LOGO
        </Link>

        {/* Navigation Links (Center) */}
        <ul className="flex space-x-6 mx-auto">
          <li>
            <Link href="/" className="text-white text-base font-medium hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white text-base font-medium hover:text-blue-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white text-base font-medium hover:text-blue-400">
              About Us
            </Link>
          </li>
        </ul>

        {/* Profile & Cart (Right Side) */}
        <div className="flex items-center space-x-6">
          {/* Profile Icon */}
          <Link href="/profile" className="text-white text-xl hover:text-blue-400">
            <FaUser /> {/* React Icon for user */}
          </Link>

          {/* Cart Icon */}
          <button onClick={() => setCartOpen(!cartOpen)} className="text-white text-xl hover:text-blue-400">
            <FaShoppingCart /> {/* React Icon for shopping cart */}
          </button>
        </div>
      </div>

      {/* Cart Dropdown */}
      {cartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
