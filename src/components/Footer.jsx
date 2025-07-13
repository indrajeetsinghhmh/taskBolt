import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">
          &copy; 2025 TaskBolt. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <Link to="/privacypolicy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/tos" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer