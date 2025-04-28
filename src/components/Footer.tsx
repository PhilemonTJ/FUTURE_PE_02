
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartMealPlan</h3>
            <p className="text-gray-300 mb-4">Turn your Pantry into Possibilities with AI-powered recipe suggestions.</p>
            <div className="flex items-center space-x-2">
              <img 
                src="/public/lovable-uploads/SmartMealPlan Logo.png" 
                alt="SmartMealPlan Logo" 
                className="h-8 w-8" 
              />
              <span className="font-semibold">SmartMealPlan</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-gray-300 hover:text-brand-orange transition-colors">Recipes</Link></li>
              <li><Link to="/preferences" className="text-gray-300 hover:text-brand-orange transition-colors">Preferences</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-brand-orange transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">AI Recipe Suggestions</span></li>
              <li><span className="text-gray-300">Dietary Preferences</span></li>
              <li><span className="text-gray-300">Ingredient Substitutions</span></li>
              <li><span className="text-gray-300">Weekly Meal Planning</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-3">Get weekly recipe inspiration</p>
            <div className="flex max-w-md">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-2 rounded-l text-black focus:outline-none" 
              />
              <button className="bg-brand-orange text-white px-4 py-2 rounded-r hover:bg-brand-orange/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartMealPlan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
