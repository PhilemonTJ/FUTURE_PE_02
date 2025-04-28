
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface IngredientInputProps {
  onSubmit: (ingredients: string[]) => void;
}

const IngredientInput = ({ onSubmit }: IngredientInputProps) => {
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  
  const handleAddIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim())) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddIngredient();
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentIngredient.trim()) {
      handleAddIngredient();
      // Let the actual submission happen in the next render cycle
      // so the new ingredient is included
      setTimeout(() => onSubmit(ingredients), 0);
    } else {
      onSubmit(ingredients);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter an ingredient (e.g., chicken, tomatoes, rice)"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1"
          />
          <Button 
            type="button" 
            onClick={handleAddIngredient}
            className="bg-brand-orange hover:bg-brand-orange/90"
          >
            Add
          </Button>
        </div>

        {ingredients.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Your ingredients:</p>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="ingredient-tag flex items-center"
                >
                  {ingredient}
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(ingredient)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-brand-green hover:bg-brand-green/90 mt-6"
          disabled={ingredients.length === 0}
        >
          Find Recipes
        </Button>
      </form>
    </div>
  );
};

export default IngredientInput;
