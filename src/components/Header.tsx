
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, UserCircle, Bell, X } from "lucide-react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {!showSearch ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-primary">Pay</span>
              <span className="text-2xl font-bold text-secondary">Back</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-600" onClick={toggleSearch}>
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <UserCircle size={20} />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search stores and deals..."
                className="w-full py-2 px-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-600" onClick={toggleSearch}>
              <X size={20} />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
