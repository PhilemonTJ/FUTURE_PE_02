
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] border-b border-gray-800 py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/548db413-1329-4c24-aac3-32f37c868f50.png"
            alt="SmartMealPlan Logo" 
            className="h-10 w-10" 
          />
          <span className="font-bold text-xl text-white font-quicksand">SmartMealPlan</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-brand-orange transition-colors font-quicksand">Home</Link>
          <Link to="/recipes" className="text-white hover:text-brand-orange transition-colors font-quicksand">Recipes</Link>
          <Link to="/preferences" className="text-white hover:text-brand-orange transition-colors font-quicksand">Preferences</Link>
          <Link to="/blog" className="text-white hover:text-brand-orange transition-colors font-quicksand">Blog</Link>
          <Button variant="default" className="bg-brand-green hover:bg-brand-green/90 font-quicksand">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-orange">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 px-6 bg-[#1A1A1A]">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-brand-orange transition-colors py-2 font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="text-white hover:text-brand-orange transition-colors py-2 font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/preferences" 
              className="text-white hover:text-brand-orange transition-colors py-2 font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              Preferences
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-brand-orange transition-colors py-2 font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Button 
              variant="default" 
              className="bg-brand-green hover:bg-brand-green/90 w-full font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
