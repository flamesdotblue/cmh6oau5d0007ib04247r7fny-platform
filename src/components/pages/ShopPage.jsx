import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { name: 'Minimal Leather Wallet', price: 48, image: 'https://images.unsplash.com/photo-1593030761757-71fae1f9f0a8?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Stoneware Mug', price: 24, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Linen Overshirt', price: 72, image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Desk Organizer Set', price: 58, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Canvas Tote', price: 32, image: 'https://images.unsplash.com/photo-1610701592029-1d82fa7d42fe?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Scented Candle', price: 18, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Cotton Tee', price: 28, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Concrete Planter', price: 26, image: 'https://images.unsplash.com/photo-1467043153537-a4f1fbc3eac5?q=80&w=1200&auto=format&fit=crop' },
];

export default function ShopPage() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Shop</h1>
          <p className="text-gray-600 mt-2">Explore our full range of thoughtfully designed essentials.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
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
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <p className="text-teal-700 font-semibold">${p.price.toFixed(2)}</p>
                <button className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
