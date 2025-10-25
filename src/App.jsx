import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter antialiased">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
