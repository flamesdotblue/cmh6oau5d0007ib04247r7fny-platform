import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterSwitch from './components/RouterSwitch';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter antialiased">
      <Header />
      <main className="overflow-hidden">
        <RouterSwitch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
