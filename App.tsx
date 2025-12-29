import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] font-sans text-stone-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;