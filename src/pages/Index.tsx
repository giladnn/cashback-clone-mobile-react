
import React, { useState } from 'react';
import Header from '../components/Header';
import FeaturedSlider from '../components/FeaturedSlider';
import StoreGrid from '../components/StoreGrid';
import CategorySection from '../components/CategorySection';
import FooterNav from '../components/FooterNav';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container mx-auto max-w-lg">
        <div className="px-4 py-3">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search stores, categories and deals..."
              className="w-full pl-10 pr-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="featured" className="w-full">
            <ScrollArea className="w-full">
              <TabsList className="w-full justify-start mb-3 bg-transparent p-0 h-auto">
                <TabsTrigger value="featured" className="px-4 py-2 text-sm rounded-full">Featured</TabsTrigger>
                <TabsTrigger value="popular" className="px-4 py-2 text-sm rounded-full">Popular</TabsTrigger>
                <TabsTrigger value="new" className="px-4 py-2 text-sm rounded-full">New Offers</TabsTrigger>
                <TabsTrigger value="categories" className="px-4 py-2 text-sm rounded-full">Categories</TabsTrigger>
                <TabsTrigger value="all" className="px-4 py-2 text-sm rounded-full">All Stores</TabsTrigger>
              </TabsList>
            </ScrollArea>
            
            <TabsContent value="featured" className="mt-2">
              <FeaturedSlider />
              <StoreGrid title="Popular Stores" />
            </TabsContent>
            
            <TabsContent value="popular" className="mt-2">
              <StoreGrid title="Popular Stores" />
            </TabsContent>
            
            <TabsContent value="new" className="mt-2">
              <StoreGrid title="New Offers" />
            </TabsContent>
            
            <TabsContent value="categories" className="mt-2">
              <CategorySection />
              <StoreGrid title="Stores by Category" />
            </TabsContent>
            
            <TabsContent value="all" className="mt-2">
              <CategorySection />
              <StoreGrid title="All Stores" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <FooterNav />
    </div>
  );
};

export default Index;
