
import React from 'react';
import { Button } from "@/components/ui/button";
import { UserCircle, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-0.5">
            <span className="text-xl font-bold text-primary">Pay</span>
            <span className="text-xl font-bold text-secondary">Back</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-gray-600 h-8 w-8">
              <Bell size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 h-8 w-8">
              <UserCircle size={18} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
