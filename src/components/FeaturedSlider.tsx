
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Amazon",
    cashback: "3.5%",
    image: "https://placehold.co/600x300/e6f2ff/0066cc?text=Amazon+Deal",
    color: "bg-blue-100"
  },
  {
    id: 2,
    title: "ASOS",
    cashback: "5%",
    image: "https://placehold.co/600x300/fff5e6/ff9900?text=ASOS+Deal",
    color: "bg-orange-100"
  },
  {
    id: 3,
    title: "Nike",
    cashback: "4%",
    image: "https://placehold.co/600x300/e6ffe6/00cc00?text=Nike+Deal",
    color: "bg-green-100"
  }
];

const FeaturedSlider = () => {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-2 px-4">
        <h2 className="text-lg font-bold">Featured Deals</h2>
        <button className="flex items-center text-primary text-xs font-medium">
          View all <ArrowRight size={14} className="ml-1" />
        </button>
      </div>

      <div className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory pb-3 px-4 space-x-3">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="snap-start snap-always flex-shrink-0 w-[85%]"
          >
            <Card className={`featured-card shadow-sm active:scale-98 transition-transform border-0 h-36 ${slide.color}`}>
              <CardContent className="p-0 h-full relative">
                <div className="w-full h-full flex flex-col justify-between p-3">
                  <div className="px-2 py-1 bg-white/80 rounded-full text-xs font-semibold self-start">{slide.cashback} Cashback</div>
                  <div>
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-xs text-gray-600">Limited time offer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
