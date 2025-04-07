import React, { useContext, useState } from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import cartContext from "../context/Cartprovider";
import { useEffect } from "react";
import { getCategories } from "../services/categoryService";
import searchContext from "../context/Searchprovider";

const Header = () => {
  const { cartItem } = useContext(cartContext);
  const {setSearchTerm} = useContext(searchContext);
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Search Bar */}
          <div className="flex bg-white rounded-full px-3 py-2 shadow-md w-2/5 items-center sm:flex-none">
            <input
              className="flex-grow outline-none px-2 text-gray-700"
              type="search"
              onChange={(e) => {
                console.log("Search Input:", e.target.value); // Debugging
                setSearchTerm(e.target.value);
                setSearchTerm(e.target.value)}}
              
              placeholder="Search Products..."
            />
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>
          
        
          {/* Navigation Links */}
          <ul className="flex items-center text-white text-lg space-x-6 font-semibold ">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-300">
                Register
              </Link>
            </li>

            {/* Cart Section */}
            <li>
              <div className="relative flex items-center">
                <Link to="/cart">
                  <FaCartPlus className="text-2xl hover:text-yellow-300 transition duration-300" />
                </Link>
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItem.length}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
