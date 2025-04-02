
import React from 'react';
import { Button } from "@/components/ui/button";
import { UserCircle, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-primary">Pay</span>
            <span className="text-2xl font-bold text-secondary">Back</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600">
              <UserCircle size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
