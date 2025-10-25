import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'Shop', href: '#/shop' },
  { label: 'Categories', href: '#/categories' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-teal-500" />
            <span className="text-xl font-semibold tracking-tight">Aurelia</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#/collections/thalia-collections" className="text-sm text-teal-700 hover:text-teal-800 font-medium">Thalia</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-64 rounded-full border border-gray-200 bg-white/70 px-4 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <a aria-label="Cart" href="#/shop" className="relative inline-flex items-center justify-center rounded-full h-10 w-10 border border-gray-200 hover:border-teal-300 hover:text-teal-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-teal-500 text-white text-[10px] font-medium flex items-center justify-center">2</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a aria-label="Cart" href="#/shop" className="relative inline-flex items-center justify-center rounded-full h-10 w-10 border border-gray-200">
              <ShoppingCart className="h-5 w-5" />
            </a>
            <button aria-label="Menu" onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-gray-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <a href="#/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <div className="h-8 w-8 rounded-md bg-teal-500" />
                <span className="text-lg font-semibold">Aurelia</span>
              </a>
              <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-full h-9 w-9 border border-gray-200 flex items-center justify-center">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products"
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-base text-gray-700 hover:text-teal-600">
                  {item.label}
                </a>
              ))}
              <a href="#/collections/thalia-collections" onClick={() => setOpen(false)} className="text-base text-teal-700">Thalia</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
