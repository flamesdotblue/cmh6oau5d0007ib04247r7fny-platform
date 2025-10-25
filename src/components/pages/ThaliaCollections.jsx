import React from 'react';
import { motion } from 'framer-motion';

const thaliaProducts = [
  { name: 'Thalia Silk Dress', price: 168, image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Thalia Linen Shirt', price: 98, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Thalia Wrap Top', price: 86, image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Thalia Pleated Skirt', price: 122, image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Thalia Everyday Tote', price: 74, image: 'https://images.unsplash.com/photo-1610701592029-1d82fa7d42fe?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Thalia Knit Cardigan', price: 128, image: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1400&auto=format&fit=crop' },
];

export default function ThaliaCollections() {
  return (
    <section className="">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/70 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-10 sm:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              className="lg:col-span-6 order-2 lg:order-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 text-xs font-medium">Curated Capsule</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Thalia Collections</h1>
              <p className="mt-4 text-gray-600 max-w-xl">An elegant capsule inspired by fluid shapes and refined textures. Discover pieces that balance minimal forms with elevated details.</p>
              <div className="mt-6 text-sm text-gray-500">Inspired by: <a href="https://www.labelmdesigners.com/collections/thalia-collections" target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">Label M Designers – Thalia Collections</a></div>
            </motion.div>
            <motion.div
              className="lg:col-span-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100/60 via-amber-100/40 to-transparent rounded-3xl blur-xl" />
                <img alt="Thalia hero" className="relative rounded-3xl w-full object-cover h-[420px] shadow-xl" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Featured Pieces</h2>
              <p className="text-gray-600 mt-1">Soft silhouettes, premium materials, modern details.</p>
            </div>
            <a href="#/shop" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">Shop all</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thaliaProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{p.name}</h3>
                  <p className="text-teal-700 font-semibold">${p.price.toFixed(2)}</p>
                  <button className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
