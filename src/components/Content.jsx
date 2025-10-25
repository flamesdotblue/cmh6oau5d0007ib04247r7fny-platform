import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const categories = [
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Apparel', image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Workspace', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop' },
];

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

const testimonials = [
  { name: 'Sophia L.', quote: 'Beautifully made pieces. The attention to detail and packaging were superb. Will definitely shop again!', rating: 5 },
  { name: 'Daniel K.', quote: 'Clean design and great quality. The products feel premium without the pretension.', rating: 5 },
  { name: 'Maya P.', quote: 'Customer service was responsive and helpful. My new everyday favorites.', rating: 4 },
];

export default function Content() {
  return (
    <>
      <section id="categories" className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Shop by Category</h2>
              <p className="text-gray-600 mt-1">Find what you love, curated by lifestyle.</p>
            </div>
            <a href="#/categories" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="#/categories"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-gray-50"
              >
                <img src={cat.image} alt={cat.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow-sm backdrop-blur">{cat.name}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Trending Now</h2>
              <p className="text-gray-600 mt-1">A selection of pieces our customers love.</p>
            </div>
            <a href="#/shop" className="hidden sm:inline-flex text-teal-700 hover:text-teal-800 font-medium">Browse all</a>
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
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{p.name}</h3>
                      <p className="text-teal-700 font-semibold">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition-colors">Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Designed for modern living</h2>
              <p className="mt-4 text-gray-600">We believe in timeless design, responsible sourcing, and products that make daily life a little more special. Each piece is crafted with longevity in mind, so you can buy less and enjoy more.</p>
              <p className="mt-3 text-gray-600">From sustainable materials to ethical partnerships, our commitment to quality extends beyond the product itself.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                Thoughtfully made. Beautifully simple.
              </div>
            </motion.div>
            <motion.div className="lg:col-span-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100/50 via-teal-100/40 to-transparent rounded-3xl blur-xl" />
                <img alt="About us" className="relative rounded-3xl w-full object-cover h-[420px] shadow-xl" src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">What customers say</h2>
              <p className="text-gray-600 mt-1">Real words from people who love our products.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ name: 'Sophia L.', quote: 'Beautifully made pieces. The attention to detail and packaging were superb. Will definitely shop again!', rating: 5 }, { name: 'Daniel K.', quote: 'Clean design and great quality. The products feel premium without the pretension.', rating: 5 }, { name: 'Maya P.', quote: 'Customer service was responsive and helpful. My new everyday favorites.', rating: 4 }].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.08 }} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <svg key={idx} viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400 text-amber-400"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.164L12 18.896l-7.335 3.866 1.401-8.164L.132 9.211l8.2-1.193z"/></svg>
                  ))}
                </div>
                <p className="mt-3 text-gray-700">{t.quote}</p>
                <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
