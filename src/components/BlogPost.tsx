
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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
  
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <Link to={`/blog/${slug}`} className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
        />
      </Link>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="px-2 py-0.5 bg-brand-cream rounded-full">{category}</span>
        </div>
        <Link to={`/blog/${slug}`} className="hover:text-brand-orange">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="pt-2 text-sm text-gray-500">
        <span>By {author}</span>
      </CardFooter>
    </Card>
  );
};

export default BlogPost;
