
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  showButton = true,
  buttonText = 'Get Started',
  buttonLink = '/recipes'
}) => {
  return (
    <div 
      className="relative bg-brand-orange py-24 md:py-32 overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay for background image if needed */}
      {backgroundImage && <div className="absolute inset-0 bg-black opacity-50"></div>}
      
      {/* Decorative Circle Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">{subtitle}</p>
          
          {showButton && (
            <Link to={buttonLink}>
              <Button 
                size="lg" 
                className="bg-white text-brand-orange hover:bg-white/90 transition-colors"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
