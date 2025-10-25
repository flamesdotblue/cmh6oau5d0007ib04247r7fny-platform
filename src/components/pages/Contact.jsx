import React from 'react';

export default function Contact() {
  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Contact</h1>
          <p className="mt-3 text-gray-600">We would love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
          <form className="mt-6 grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              required
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white font-medium px-6 py-3 hover:bg-teal-700 transition-colors w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
