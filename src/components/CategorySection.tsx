
import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Fashion", icon: "👕" },
  { id: 2, name: "Electronics", icon: "📱" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Beauty", icon: "💄" },
  { id: 5, name: "Travel", icon: "✈️" },
  { id: 6, name: "Food", icon: "🍔" },
  { id: 7, name: "Sports", icon: "⚽" },
  { id: 8, name: "Kids", icon: "🧸" },
];

const CategorySection = () => {
  return (
    <div className="py-4">
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 px-4">
          {categories.map((category) => (
            <Card key={category.id} className="featured-card card-hover border-0">
              <CardContent className="flex flex-col items-center p-3">
                <div className="text-2xl mb-1">{category.icon}</div>
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategorySection;
