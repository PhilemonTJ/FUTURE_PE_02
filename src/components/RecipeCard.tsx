import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChefHat } from 'lucide-react';

export type DietaryLabel = 'vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'low-carb' | 'keto';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  dietary: DietaryLabel[];
}

interface RecipeCardProps {
  recipe: Recipe;
  compact?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, compact }) => {
  const { title, description, ingredients, instructions, prepTime, cookTime, dietary, image } = recipe;
  const [isOpen, setIsOpen] = React.useState(false);
  
  const dietaryLabels = {
    'vegan': { label: 'Vegan', color: 'bg-green-600' },
    'vegetarian': { label: 'Vegetarian', color: 'bg-green-500' },
    'gluten-free': { label: 'Gluten-Free', color: 'bg-yellow-600' },
    'dairy-free': { label: 'Dairy-Free', color: 'bg-blue-500' },
    'low-carb': { label: 'Low-Carb', color: 'bg-purple-500' },
    'keto': { label: 'Keto', color: 'bg-red-500' }
  };

  return (
    <>
      <Card className="recipe-card h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          {dietary && dietary.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {dietary.map((diet) => (
                <Badge key={diet} className={`${dietaryLabels[diet].color} hover:${dietaryLabels[diet].color}`}>
                  {dietaryLabels[diet].label}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          {!compact && <p className="text-gray-600 mb-4">{description}</p>}
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-3">Prep: {prepTime} min</span>
            <span>Cook: {cookTime} min</span>
          </div>
          
          {!compact && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Main Ingredients:</h4>
              <div className="flex flex-wrap">
                {ingredients.slice(0, 4).map((ingredient, idx) => (
                  <span key={idx} className="ingredient-tag">
                    {ingredient}
                  </span>
                ))}
                {ingredients.length > 4 && (
                  <span className="ingredient-tag">+{ingredients.length - 4} more</span>
                )}
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-2">
          <Button 
            variant="default" 
            className="w-full bg-brand-orange hover:bg-brand-orange/90"
            onClick={() => setIsOpen(true)}
          >
            <ChefHat className="mr-2 h-4 w-4" /> View Recipe
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-base text-gray-600">{description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-6" />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {dietary.map((diet) => (
                <Badge key={diet} className={`${dietaryLabels[diet].color} hover:${dietaryLabels[diet].color}`}>
                  {dietaryLabels[diet].label}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Preparation Time</h4>
                <p>{prepTime} minutes</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Cooking Time</h4>
                <p>{cookTime} minutes</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Ingredients</h4>
              <ul className="list-disc list-inside space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Instructions</h4>
              <ol className="list-decimal list-inside space-y-3">
                {instructions.map((step, index) => (
                  <li key={index} className="pl-2">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecipeCard;
