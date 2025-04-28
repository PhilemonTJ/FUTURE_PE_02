
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-brand-cream">
        <div className="text-center px-4">
          <div className="mb-8">
            <span className="text-brand-orange text-9xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The recipe you're looking for seems to be missing from our cookbook.
          </p>
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
