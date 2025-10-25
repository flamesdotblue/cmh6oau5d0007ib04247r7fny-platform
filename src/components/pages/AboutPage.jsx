import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-600">We believe in timeless design, responsible sourcing, and products that make daily life a little more special. Each piece is crafted with longevity in mind, so you can buy less and enjoy more.</p>
            <p className="mt-3 text-gray-600">From sustainable materials to ethical partnerships, our commitment to quality extends beyond the product itself.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              Thoughtfully made. Beautifully simple.
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100/50 via-teal-100/40 to-transparent rounded-3xl blur-xl" />
              <img
                alt="About us"
                className="relative rounded-3xl w-full object-cover h-[420px] shadow-xl"
                src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
