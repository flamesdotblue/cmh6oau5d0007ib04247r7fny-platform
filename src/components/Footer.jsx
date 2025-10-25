import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-teal-500" />
              <span className="text-lg font-semibold">Aurelia</span>
            </div>
            <p className="mt-3 text-gray-600 text-sm max-w-xs">
              Minimal, well-made goods for everyday living. Designed to last and feel good.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-teal-700 hover:border-teal-300 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-teal-700 hover:border-teal-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:text-teal-700 hover:border-teal-300 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-teal-700">New Arrivals</a></li>
              <li><a href="#" className="hover:text-teal-700">Gift Cards</a></li>
              <li><a href="#" className="hover:text-teal-700">Shipping</a></li>
              <li><a href="#" className="hover:text-teal-700">Returns</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-teal-700">About</a></li>
              <li><a href="#" className="hover:text-teal-700">Careers</a></li>
              <li><a href="#" className="hover:text-teal-700">Sustainability</a></li>
              <li><a href="#" className="hover:text-teal-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Subscribe</div>
            <p className="mt-3 text-sm text-gray-600">Get updates about new collections and special offers.</p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
              <button type="submit" className="rounded-full bg-teal-600 text-white text-sm px-5 py-2 font-medium hover:bg-teal-700 transition-colors">
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} Aurelia. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
