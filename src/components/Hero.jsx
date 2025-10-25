import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/70 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div className="lg:col-span-6 order-2 lg:order-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 text-xs font-medium">New Collection</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Elevate Your Everyday Essentials</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Discover thoughtfully designed products that blend minimal aesthetics with everyday functionality. Crafted with premium materials and attention to detail.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#/shop" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 shadow-sm transition-colors">Shop Now</a>
              <a href="#/categories" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-teal-300 hover:text-teal-700 transition-colors">Explore Categories</a>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-6 order-1 lg:order-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100/60 via-amber-100/40 to-transparent rounded-3xl blur-xl" />
              <img alt="Featured collection" className="relative rounded-3xl w-full object-cover h-[420px] shadow-xl" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
