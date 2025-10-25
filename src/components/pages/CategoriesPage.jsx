import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Apparel', image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Workspace', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop' },
];

export default function CategoriesPage() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-2">Browse by lifestyle-focused categories.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#/shop"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-50"
            >
              <img src={cat.image} alt={cat.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow-sm backdrop-blur">
                  {cat.name}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
