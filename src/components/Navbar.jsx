'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get user data from the Redux store (auth slice)
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-gray-200 px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-[1400px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
        </Link>

        <div className="lg:hidden flex items-center space-x-4">
          

          <div className="flex items-center space-x-4">
            {/* Conditional rendering for profile or login button */}
            {user ? (
              <Link href="/profile" className="text-black text-xl hover:text-blue-400">
                <FaUser />
              </Link>
            ) : (
              <Link
                href="/register"
                className="text-black text-base font-medium hover:text-gray-900 px-4 py-2 rounded-[20px] bg-gray-300 hover:bg-gray-400"
              >
                Kayit ol
              </Link>
            )}

            {/* Cart Icon */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-black text-xl hover:text-gray-400"
            >
              <FaShoppingCart />
            </button>
          </div>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`lg:flex lg:space-x-6 absolute lg:static bg-gray-200 top-16 left-0 w-full lg:w-auto transition-transform transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <li className="border-b lg:border-none">
            <Link
              href="/"
              className="block text-black text-base font-medium hover:text-blue-400 p-4 lg:p-0"
            >
              Home
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              href="/products"
              className="block text-black text-base font-medium hover:text-blue-400 p-4 lg:p-0"
            >
              Products
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              href="/about"
              className="block text-black text-base font-medium hover:text-blue-400 p-4 lg:p-0"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Profile & Cart (Right Side for Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Conditional rendering for profile or login button */}
          {user ? (
            <Link href="/profile" className="text-black text-xl hover:text-blue-400">
              <FaUser />
            </Link>
          ) : (
            <Link
              href="/register"
              className="text-black text-base font-medium hover:text-gray-900 px-4 py-2 rounded-[20px] bg-gray-300 hover:bg-gray-400"
            >
              Kayit ol
            </Link>
          )}

         
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
