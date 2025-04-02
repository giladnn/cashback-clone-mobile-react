
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
    <div className="py-4">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold">Featured Deals</h2>
        <button className="flex items-center text-primary text-sm font-medium">
          View all <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 px-4 space-x-4">
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="snap-start snap-always flex-shrink-0 w-[80%]"
          >
            <Card className={`featured-card card-hover border-0 h-40 ${slide.color}`}>
              <CardContent className="p-0 h-full relative">
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex flex-col justify-between p-4">
                  <div className="cashback-tag self-start">{slide.cashback} Cashback</div>
                  <div>
                    <h3 className="text-xl font-bold">{slide.title}</h3>
                    <p className="text-sm text-gray-600">Limited time offer</p>
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
