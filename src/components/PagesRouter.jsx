import React, { useEffect, useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThaliaCollections from './pages/ThaliaCollections';

function getPathFromHash() {
  const hash = window.location.hash || '#/';
  const cleaned = hash.startsWith('#') ? hash.substring(1) : hash;
  return cleaned || '/';
}

export default function PagesRouter() {
  const [path, setPath] = useState(getPathFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setPath(getPathFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const element = useMemo(() => {
    switch (true) {
      case path === '/' || path === '':
        return <HomePage />;
      case path === '/shop':
        return <ShopPage />;
      case path === '/categories':
        return <CategoriesPage />;
      case path === '/about':
        return <AboutPage />;
      case path === '/contact':
        return <ContactPage />;
      case path === '/collections/thalia-collections':
        return <ThaliaCollections />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Page not found</h1>
            <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
            <a href="#/" className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors">Go Home</a>
          </div>
        );
    }
  }, [path]);

  return element;
}
