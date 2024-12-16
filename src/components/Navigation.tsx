import React from 'react';
import { Menu, Home, User, Briefcase, Mail } from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home className="w-5 h-5" /> },
  { label: 'About', icon: <User className="w-5 h-5" /> },
  { label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
  { label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

export function Navigation({ currentPage, setCurrentPage }: { 
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) {
  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setCurrentPage(item.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
              ${currentPage === item.label 
                ? 'bg-white text-black shadow-lg scale-105' 
                : 'bg-black/20 text-white hover:bg-white/30'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}