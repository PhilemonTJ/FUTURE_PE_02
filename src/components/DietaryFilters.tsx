
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DietaryLabel } from './RecipeCard';

interface DietaryFiltersProps {
  activeFilters: DietaryLabel[];
  onChange: (filters: DietaryLabel[]) => void;
}

const DietaryFilters: React.FC<DietaryFiltersProps> = ({ activeFilters, onChange }) => {
  const dietaryOptions = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'dairy-free', label: 'Dairy-Free' },
    { value: 'low-carb', label: 'Low-Carb' },
    { value: 'keto', label: 'Keto' }
  ];

  const handleToggle = (value: DietaryLabel) => {
    if (activeFilters.includes(value)) {
      onChange(activeFilters.filter(filter => filter !== value));
    } else {
      onChange([...activeFilters, value]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      {dietaryOptions.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <Checkbox 
            id={`filter-${option.value}`} 
            checked={activeFilters.includes(option.value as DietaryLabel)}
            onCheckedChange={() => handleToggle(option.value as DietaryLabel)}
          />
          <Label 
            htmlFor={`filter-${option.value}`}
            className="text-sm cursor-pointer"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default DietaryFilters;
