import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, MonitorIcon, ShoppingCartIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MonitorIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                BuildMyPC
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/builder" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              PC Builder
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Parts Catalog
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <button className="flex items-center text-indigo-600 hover:text-indigo-800">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              <span>Cart (0)</span>
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/builder" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              PC Builder
            </Link>
            <Link to="/catalog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              Parts Catalog
            </Link>
            <button className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>}
    </header>;
};
export default Header;