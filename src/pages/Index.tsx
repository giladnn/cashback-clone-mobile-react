
import React from 'react';
import Header from '../components/Header';
import FeaturedSlider from '../components/FeaturedSlider';
import StoreGrid from '../components/StoreGrid';
import CategorySection from '../components/CategorySection';
import FooterNav from '../components/FooterNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container mx-auto max-w-lg">
        <div className="py-2">
          <FeaturedSlider />
          <CategorySection />
          <StoreGrid title="Popular Stores" />
          <StoreGrid title="New Offers" />
        </div>
      </main>
      
      <FooterNav />
    </div>
  );
};

export default Index;
