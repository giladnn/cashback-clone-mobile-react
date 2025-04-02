
import React from 'react';
import { Home, Search, Tag, Heart, User } from "lucide-react";

const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40">
      <div className="flex justify-around items-center h-14">
        <button className="flex flex-col items-center justify-center text-primary">
          <Home size={18} />
          <span className="text-[10px] mt-0.5">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <Search size={18} />
          <span className="text-[10px] mt-0.5">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <Tag size={18} />
          <span className="text-[10px] mt-0.5">Deals</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <Heart size={18} />
          <span className="text-[10px] mt-0.5">Favorites</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <User size={18} />
          <span className="text-[10px] mt-0.5">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default FooterNav;
