
import React from 'react';
import Hero from '@/components/Hero';
import IngredientInput from '@/components/IngredientInput';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Star, Filter, Chef } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const { toast } = useToast();

  const handleIngredientSubmit = (ingredients: string[]) => {
    console.log('Ingredients submitted:', ingredients);
    // In a real app, this would redirect to recipes page with the ingredients
    // For demo purposes, show a toast
    toast({
      title: 'Finding recipes...',
      description: `Looking for recipes with: ${ingredients.join(', ')}`,
    });
    
    // Simulate redirect
    setTimeout(() => {
      window.location.href = '/recipes';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Turn Your Pantry into Possibilities" 
          subtitle="Enter the ingredients you have, and let our AI find the perfect recipe for you."
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-center mb-2">What's in Your Kitchen?</h2>
              <p className="text-gray-600 text-center mb-8">
                List the ingredients you have on hand, and we'll suggest delicious recipes you can make right now.
              </p>
              <IngredientInput onSubmit={handleIngredientSubmit} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                    <Utensils className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enter Ingredients</h3>
                  <p className="text-gray-600">Tell us what ingredients you have in your pantry or refrigerator.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                    <Filter className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Set Preferences</h3>
                  <p className="text-gray-600">Customize your dietary needs and preferences for personalized results.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                    <Star className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Recipes</h3>
                  <p className="text-gray-600">Our AI suggests delicious recipes based on what you have available.</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                    <Chef className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Start Cooking</h3>
                  <p className="text-gray-600">Follow our step-by-step instructions to prepare your meal.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link to="/recipes" className="text-brand-orange hover:underline font-medium">
                Ready to get started? Try it now →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Smart Recipe Suggestions Based on What You Have</h2>
                <p className="text-gray-600 mb-6">
                  SmartMealPlan uses advanced AI to analyze the ingredients you have and suggest recipes that maximize what's already in your kitchen, minimizing food waste and saving you time and money.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-green p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Find recipes with ingredients you already have</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-green p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Get ingredient substitution suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-brand-green p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Filter recipes based on dietary preferences</span>
                  </li>
                </ul>
                <Link to="/recipes" className="bg-brand-green text-white px-6 py-3 rounded-md hover:bg-brand-green/90 inline-block font-medium">
                  Find Recipes Now
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800" 
                  alt="Meal preparation" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-brand-orange">90% Less Food Waste</p>
                  <p className="text-sm">Users report less grocery shopping and reduced waste</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
