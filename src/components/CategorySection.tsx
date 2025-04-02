
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
    <div className="py-2">
      <div className="px-4 mb-2">
        <h2 className="text-lg font-bold">Categories</h2>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 px-4">
          {categories.map((category) => (
            <Card key={category.id} className="featured-card active:scale-95 transition-transform border-0 shadow-sm">
              <CardContent className="flex flex-col items-center p-2">
                <div className="text-xl mb-0.5">{category.icon}</div>
                <span className="text-xs font-medium">{category.name}</span>
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
