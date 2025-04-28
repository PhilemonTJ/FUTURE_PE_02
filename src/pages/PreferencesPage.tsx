
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PreferencesPage = () => {
  const { toast } = useToast();
  
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    lowCarb: false,
    keto: false,
    pescatarian: false,
    paleo: false,
  });
  
  const [allergyPreferences, setAllergyPreferences] = useState({
    nuts: false,
    peanuts: false,
    shellfish: false,
    soy: false,
    wheat: false,
    eggs: false,
    fish: false,
    sesame: false,
  });
  
  const [cookingPreferences, setCookingPreferences] = useState({
    maxPrepTime: 30, // minutes
    spiceLevel: 3, // 1-5
    servingSize: 2,
    favourCookingMethod: 'any', // any, baking, grilling, etc.
  });
  
  const handleSavePreferences = () => {
    console.log('Saving preferences:', {
      dietary: dietaryPreferences,
      allergies: allergyPreferences,
      cooking: cookingPreferences
    });
    
    // In a real app, this would save to a backend or local storage
    toast({
      title: 'Preferences Saved',
      description: 'Your dietary and cooking preferences have been updated.',
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Your Preferences" 
          subtitle="Customize your dietary needs and cooking preferences"
          showButton={false}
        />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="dietary" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dietary">Dietary Preferences</TabsTrigger>
                <TabsTrigger value="allergies">Allergies</TabsTrigger>
                <TabsTrigger value="cooking">Cooking Preferences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dietary" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dietary Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">
                      Select the dietary preferences that apply to you. We'll use these to customize recipe suggestions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(dietaryPreferences).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-4">
                          <Switch 
                            id={`dietary-${key}`} 
                            checked={value}
                            onCheckedChange={(checked) => {
                              setDietaryPreferences({
                                ...dietaryPreferences,
                                [key]: checked
                              });
                            }}
                          />
                          <Label htmlFor={`dietary-${key}`} className="capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="allergies" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Allergies & Intolerances</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">
                      Select any allergies or foods you want to avoid. We'll exclude these ingredients from your recipe suggestions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(allergyPreferences).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-4">
                          <Switch 
                            id={`allergy-${key}`} 
                            checked={value}
                            onCheckedChange={(checked) => {
                              setAllergyPreferences({
                                ...allergyPreferences,
                                [key]: checked
                              });
                            }}
                          />
                          <Label htmlFor={`allergy-${key}`} className="capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cooking" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cooking Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="max-prep-time">Maximum Preparation Time: {cookingPreferences.maxPrepTime} minutes</Label>
                      <Slider 
                        id="max-prep-time"
                        defaultValue={[cookingPreferences.maxPrepTime]} 
                        min={5} 
                        max={120} 
                        step={5}
                        onValueChange={(value) => {
                          setCookingPreferences({
                            ...cookingPreferences,
                            maxPrepTime: value[0]
                          });
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="spice-level">Spice Level: {['Mild', 'Medium-Low', 'Medium', 'Medium-Hot', 'Hot'][cookingPreferences.spiceLevel - 1]}</Label>
                      <Slider 
                        id="spice-level"
                        defaultValue={[cookingPreferences.spiceLevel]} 
                        min={1} 
                        max={5} 
                        step={1}
                        onValueChange={(value) => {
                          setCookingPreferences({
                            ...cookingPreferences,
                            spiceLevel: value[0]
                          });
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="serving-size">Typical Serving Size: {cookingPreferences.servingSize} {cookingPreferences.servingSize === 1 ? 'person' : 'people'}</Label>
                      <Slider 
                        id="serving-size"
                        defaultValue={[cookingPreferences.servingSize]} 
                        min={1} 
                        max={10}
                        step={1}
                        onValueChange={(value) => {
                          setCookingPreferences({
                            ...cookingPreferences,
                            servingSize: value[0]
                          });
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Preferred Cooking Method</Label>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {['any', 'baking', 'grilling', 'stovetop', 'slow-cooker', 'pressure-cooker', 'air-fryer'].map(method => (
                          <Button 
                            key={method}
                            variant={cookingPreferences.favourCookingMethod === method ? 'default' : 'outline'}
                            onClick={() => setCookingPreferences({
                              ...cookingPreferences,
                              favourCookingMethod: method
                            })}
                            className={`capitalize ${cookingPreferences.favourCookingMethod === method ? 'bg-brand-orange hover:bg-brand-orange/90' : ''}`}
                          >
                            {method === 'any' ? 'Any Method' : method.replace('-', ' ')}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <Button 
                onClick={handleSavePreferences}
                className="bg-brand-green hover:bg-brand-green/90 px-8"
                size="lg"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreferencesPage;
