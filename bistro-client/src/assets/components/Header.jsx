import React, { useContext, useState } from 'react';
// Import the styles from your Tailwind CSS file
import 'tailwindcss/tailwind.css';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import { providerContext } from './AuthContext';
import useCart from './hoks/useCard';
import { TiShoppingCart } from "react-icons/ti";

// Define the React component
const Header = () => {
  // State to manage the mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutHandle } = useContext(providerContext)
  const [cart] = useCart()
  const haldleLogOut = () => {
    logOutHandle()
      .then(() => { })
      .catch(() => { })
  }
  return (
    <nav className="bg-[#15151580] shadow dark:bg-gray-800 fixed w-full z-10">
      <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="w-40" src={logo} alt="Logo" />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className={`absolute inset-x-0 z-20 w-full px-4 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-2 text-black md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Home</a>

            <Link to='/out-menu' className="my-2 text-black md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Our Menu</Link>

            <Link to='/out-shop/salad' className="my-2 text-black md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Our Shop</Link>

            {
              user ? <> <h1 className='text-white text-lg font-medium '>{user.displayName}</h1> <button onClick={haldleLogOut} className="my-2 text-black md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Logout</button> </>
                : <> <Link to='/Login' className="my-2 text-black md:text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Login</Link></>
            }
          </div>
          <div className="flex justify-center md:block">
            <Link to='/Dashboard/mycart' className="btn">
             <TiShoppingCart className='text-2xl'> </TiShoppingCart>
              <div className="badge badge-secondary">{cart.length}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export the React component
export default Header;