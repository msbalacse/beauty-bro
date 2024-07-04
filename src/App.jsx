import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <Products />
      <Footer />
    </main>
  );
};

export default App;
