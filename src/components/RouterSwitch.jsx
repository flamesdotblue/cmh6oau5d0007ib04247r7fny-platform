import React, { useEffect, useState, useMemo } from 'react';
import Home from './pages/Home';
import CollectionsThalia from './pages/CollectionsThalia';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

// Simple hash-based router to avoid external dependencies
// Supported routes:
//  - #/          -> Home
//  - #/shop      -> Shop
//  - #/about     -> About
//  - #/contact   -> Contact
//  - #/collections/thalia-collections -> Thalia Collection page

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/collections/thalia-collections', component: CollectionsThalia },
];

function normalizeHash(hash) {
  if (!hash || hash === '#') return '/';
  const clean = hash.replace(/^#/, '');
  return clean || '/';
}

export default function RouterSwitch() {
  const [current, setCurrent] = useState(() => normalizeHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setCurrent(normalizeHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const { Component } = useMemo(() => {
    const match = routes.find((r) => r.path === current);
    return { Component: match ? match.component : Home };
  }, [current]);

  return <Component />;
}
