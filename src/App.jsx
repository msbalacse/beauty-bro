import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Products from './components/Products';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <Products />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
