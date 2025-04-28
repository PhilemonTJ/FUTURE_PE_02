
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import IngredientInput from '@/components/IngredientInput';
import RecipeCard, { Recipe, DietaryLabel } from '@/components/RecipeCard';
import DietaryFilters from '@/components/DietaryFilters';
import { Separator } from '@/components/ui/separator';

const dummyRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Garlic Butter Shrimp Pasta',
    description: 'A quick and easy shrimp pasta dish with a garlic butter sauce.',
    ingredients: ['Shrimp', 'Pasta', 'Garlic', 'Butter', 'Parsley'],
    instructions: [
      'Cook pasta according to package instructions.',
      'In a large skillet, melt butter and add garlic.',
      'Add shrimp and cook until pink.',
      'Toss with pasta and garnish with parsley.'
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800',
    dietary: ['dairy-free']
  },
  {
    id: '2',
    title: 'Vegetable Stir Fry',
    description: 'A healthy vegetable stir fry with a savory sauce.',
    ingredients: ['Bell Peppers', 'Broccoli', 'Carrots', 'Soy Sauce', 'Ginger'],
    instructions: [
      'Chop all vegetables into bite-sized pieces.',
      'Heat oil in a wok or large skillet.',
      'Add vegetables and stir fry until tender-crisp.',
      'Add sauce and toss to coat.'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegan', 'vegetarian', 'gluten-free']
  },
  {
    id: '3',
    title: 'Classic Beef Chili',
    description: 'A hearty beef chili with beans and tomatoes.',
    ingredients: ['Ground Beef', 'Kidney Beans', 'Tomatoes', 'Onion', 'Chili Powder'],
    instructions: [
      'Brown ground beef in a large pot.',
      'Add diced onions and cook until soft.',
      'Stir in beans, tomatoes, and spices.',
      'Simmer for 45 minutes.'
    ],
    prepTime: 20,
    cookTime: 60,
    servings: 6,
    image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80&w=800',
    dietary: ['dairy-free']
  },
  {
    id: '4',
    title: 'Keto Breakfast Bowl',
    description: 'A low-carb breakfast bowl with eggs, avocado, and spinach.',
    ingredients: ['Eggs', 'Avocado', 'Spinach', 'Bacon', 'Cherry Tomatoes'],
    instructions: [
      'Cook eggs to your liking.',
      'Fry bacon until crisp.',
      'Arrange eggs, bacon, sliced avocado, spinach, and halved cherry tomatoes in a bowl.'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800',
    dietary: ['keto', 'gluten-free', 'low-carb']
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Salad',
    description: 'A refreshing quinoa salad with Mediterranean flavors.',
    ingredients: ['Quinoa', 'Cucumber', 'Cherry Tomatoes', 'Red Onion', 'Feta Cheese'],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Chop vegetables and mix with cooled quinoa.',
      'Crumble feta cheese on top.',
      'Drizzle with olive oil and lemon juice.'
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: '6',
    title: 'Vegan Buddha Bowl',
    description: 'A colorful vegan buddha bowl packed with vegetables and protein.',
    ingredients: ['Sweet Potato', 'Chickpeas', 'Kale', 'Avocado', 'Tahini'],
    instructions: [
      'Roast sweet potatoes and chickpeas.',
      'Massage kale with olive oil.',
      'Arrange all ingredients in a bowl.',
      'Drizzle with tahini sauce.'
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegan', 'vegetarian', 'dairy-free', 'gluten-free']
  }
];

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(dummyRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [activeFilters, setActiveFilters] = useState<DietaryLabel[]>([]);

  const handleIngredientSubmit = (ingredients: string[]) => {
    console.log('Searching recipes with ingredients:', ingredients);
    
    // In a real app, this would make an API call
    // For demo purposes, we'll just filter the dummy recipes based on if they contain at least one ingredient
    if (ingredients.length === 0) {
      setFilteredRecipes(recipes);
      return;
    }
    
    const lowerCaseIngredients = ingredients.map(ing => ing.toLowerCase());
    
    const filtered = recipes.filter(recipe => {
      return recipe.ingredients.some(ingredient => 
        lowerCaseIngredients.some(search => 
          ingredient.toLowerCase().includes(search)
        )
      );
    });
    
    setFilteredRecipes(filtered);
  };

  const handleFilterChange = (filters: DietaryLabel[]) => {
    setActiveFilters(filters);
    
    if (filters.length === 0) {
      setFilteredRecipes(recipes);
      return;
    }
    
    const filtered = recipes.filter(recipe => 
      filters.every(filter => recipe.dietary.includes(filter))
    );
    
    setFilteredRecipes(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Discover Recipes" 
          subtitle="Find dishes based on ingredients you have at hand"
          showButton={false}
          backgroundImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000"
        />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-center mb-8">Search by Ingredients</h2>
              <IngredientInput onSubmit={handleIngredientSubmit} />
            </div>
            
            <Separator className="my-8" />
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Dietary Preferences</h3>
              <DietaryFilters 
                activeFilters={activeFilters}
                onChange={handleFilterChange}
              />
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-6">
              {filteredRecipes.length > 0 
                ? `${filteredRecipes.length} Recipe${filteredRecipes.length !== 1 ? 's' : ''} Found`
                : 'No Recipes Found'}
            </h2>
            
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">No recipes match your current filters.</p>
                <button 
                  className="text-brand-orange hover:underline"
                  onClick={() => {
                    setActiveFilters([]);
                    setFilteredRecipes(recipes);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RecipesPage;
