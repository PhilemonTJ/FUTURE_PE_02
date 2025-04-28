
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { title, excerpt, date, author, category, image, slug } = post;
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span>{date}</span>
            <span className="px-2 py-0.5 bg-brand-cream rounded-full">{category}</span>
          </div>
          <div className="hover:text-brand-orange">
            <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </CardContent>
        
        <CardFooter className="pt-2 text-sm text-gray-500">
          <span>By {author}</span>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{date}</span>
              <span className="px-2 py-0.5 bg-brand-cream rounded-full text-sm">{category}</span>
            </div>
            <DialogTitle className="text-3xl font-bold mb-4">{title}</DialogTitle>
            <div className="text-sm text-gray-500">By {author}</div>
          </DialogHeader>

          <div className="mt-6">
            <img src={image} alt={title} className="w-full h-96 object-cover rounded-lg mb-8" />
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">{excerpt}</p>
              
              {/* This is sample content - in a real app, you'd fetch the full blog content */}
              <p className="mb-4">
                In today's fast-paced world, the intersection of technology and cooking has opened up new possibilities for home chefs everywhere. With the advent of AI-powered cooking assistants and smart kitchen devices, we're seeing a revolutionary change in how people approach meal preparation.
              </p>
              
              <p className="mb-4">
                These technological advancements aren't just about convenience; they're about empowering people to cook more confidently, reduce food waste, and explore new culinary horizons. By leveraging artificial intelligence, we can now receive personalized recipe recommendations, ingredient substitutions, and cooking tips tailored to our specific needs and preferences.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">The Future of Home Cooking</h3>
              
              <p className="mb-4">
                As we look to the future, the potential for AI in the kitchen continues to grow. From smart shopping lists that learn your preferences to virtual cooking assistants that guide you through complex recipes, the possibilities are endless. This technology is making cooking more accessible and enjoyable for everyone, regardless of their experience level.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogPost;
