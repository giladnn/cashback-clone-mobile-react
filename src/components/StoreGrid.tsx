
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const stores = [
  { id: 1, name: "Amazon", cashback: "3.5%", logo: "https://placehold.co/200/e6f2ff/0066cc?text=A" },
  { id: 2, name: "ASOS", cashback: "5%", logo: "https://placehold.co/200/fff5e6/ff9900?text=AS" },
  { id: 3, name: "Nike", cashback: "4%", logo: "https://placehold.co/200/e6ffe6/00cc00?text=N" },
  { id: 4, name: "Apple", cashback: "2%", logo: "https://placehold.co/200/f2e6ff/6600cc?text=AP" },
  { id: 5, name: "eBay", cashback: "3%", logo: "https://placehold.co/200/ffe6e6/cc0000?text=E" },
  { id: 6, name: "Samsung", cashback: "2.5%", logo: "https://placehold.co/200/e6f7ff/0099cc?text=S" },
];

const StoreGrid = ({ title }: { title: string }) => {
  return (
    <div className="py-2">
      <div className="px-4 mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-2 px-4">
        {stores.map((store) => (
          <Card key={store.id} className="featured-card active:scale-95 transition-transform border-0 shadow-sm">
            <CardContent className="p-2 text-center">
              <div className="w-full aspect-square rounded-lg bg-gray-100 flex items-center justify-center mb-1.5">
                <div className="text-xl font-bold text-gray-800">{store.name.charAt(0)}</div>
              </div>
              <h3 className="text-xs font-medium truncate">{store.name}</h3>
              <p className="text-xs text-secondary font-bold">{store.cashback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoreGrid;
