"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton } from '@clerk/nextjs';
import { PiShoppingCartBold } from "react-icons/pi";
import CarCards from './CarCards'; // Assuming CarCards component is in a separate file

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddToCart = (car) => {
    setCartItems([...cartItems, car]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between p-3 px-6 shadow-lg bg-white border-b-[1px]'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFW13zXZV3JFKVMunc87H6aDip8agjPziTUtJc8qUa0anNIxJIX7FsoSdsStQXnVLsCM&usqp=CAU'
        alt='LOGO'
        width={100}
        height={100}
      />
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>Home</h2>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>History</h2>
        <h2 className='hover:bg-black px-3 p-2 rounded-md hover:text-white cursor-pointer'>Contact Us</h2>
      </div>

      <div className='flex gap-4 md:gap-10 items-center'>
        <UserButton />
        <button ref={buttonRef} onClick={handleCartButtonClick}>
          <h1 className='text-3xl md:mr-6'>
            <PiShoppingCartBold />
          </h1>
        </button>
      </div>

      <AnimatePresence>
        {showCart && (
          <motion.div
            ref={sidebarRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white p-6 w-80 md:w-96 h-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Add to Cart</h2>
              <button onClick={handleCloseCart} className="text-blue-500  hover:text-blue-700">Close</button>
              <div>
                {cartItems.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
