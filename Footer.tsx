// src/components/Footer.tsx

import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => (
  <footer id="footer" className="bg-gray-100 text-gray-800 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
      
      {/* Лого и слоган */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src="https://i.postimg.cc/K83MWqw5/logo.png"
          alt="The Trust Construct Logo"
          className="h-16 mb-4"
        />
        <p className="text-center md:text-left text-gray-600">
          Building trust in every transaction with secure milestone-based payments.
        </p>
      </div>

      {/* Legal Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold mb-3">Legal</h3>
        <ul className="space-y-2">
          <li>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Connect */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-semibold mb-3">Connect</h3>
        <ul className="space-y-2 text-gray-600">
          <li>support@the-trust-construct.com</li>
          <li>thetrustconstruct@gmail.com</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
