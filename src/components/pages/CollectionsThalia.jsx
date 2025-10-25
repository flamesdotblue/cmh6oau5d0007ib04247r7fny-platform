import React from 'react';
import { motion } from 'framer-motion';

const thaliaProducts = [
  {
    name: 'Thalia Silk Midi Dress',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Thalia Pleated Skirt',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1490481651871-1c1d6e33f4e4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Thalia Linen Blazer',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Thalia Knit Tank',
    price: 79,
    image:
      'https://images.unsplash.com/photo-1490481651871-9c2cf9cf05bf?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Thalia Wide-Leg Trousers',
    price: 158,
    image:
      'https://images.unsplash.com/photo-1520975593681-5f3b1f5a36a3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Thalia Satin Slip',
    price: 165,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function CollectionsThalia() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-amber-800 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 text-xs font-medium">
              Collection
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Thalia Collections
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl">
              A refined capsule of elegant silhouettes and soft textures. Designed for effortless dressing from day to night.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
              Limited pieces. Ethically made.
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100/60 via-teal-100/40 to-transparent rounded-3xl blur-xl" />
              <img
                alt="Thalia Collection Hero"
                className="relative rounded-3xl w-full object-cover h-[420px] shadow-xl"
                src="https://images.unsplash.com/photo-1490481651871-34bba6ae8f9a?q=80&w=1600&auto=format&fit=crop"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                Featured Pieces
              </h2>
              <p className="text-gray-600 mt-1">Discover the latest from the Thalia capsule.</p>
            </div>
            <a href="#/shop" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">Shop all</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {thaliaProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img src={p.image} alt={p.name} className="h-60 w-full object-cover" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{p.name}</h3>
                      <p className="text-teal-700 font-semibold">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
