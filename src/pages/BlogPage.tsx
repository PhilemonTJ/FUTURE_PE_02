
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BlogPost, { BlogPostType } from '@/components/BlogPost';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const dummyBlogPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Home Cooking',
    excerpt: 'Discover how artificial intelligence is changing the way we approach everyday meal planning and preparation.',
    date: 'April 12, 2023',
    author: 'Emma Rodriguez',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    slug: 'ai-revolutionizing-home-cooking'
  },
  {
    id: '2',
    title: '10 Genius Ways to Reduce Food Waste in Your Kitchen',
    excerpt: 'Learn practical strategies to minimize food waste and make the most of every ingredient in your pantry.',
    date: 'March 28, 2023',
    author: 'David Chen',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1560100927-c32f29063ade?auto=format&fit=crop&q=80&w=800',
    slug: 'reduce-food-waste-kitchen'
  },
  {
    id: '3',
    title: 'Seasonal Cooking: Spring Ingredients to Add to Your Pantry',
    excerpt: 'Embrace the flavors of spring with these fresh, seasonal ingredients that will elevate your cooking.',
    date: 'March 15, 2023',
    author: 'Sophia Kim',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1457296898342-cdd24585d095?auto=format&fit=crop&q=80&w=800',
    slug: 'spring-ingredients-pantry'
  },
  {
    id: '4',
    title: 'Plant-Based Proteins: A Comprehensive Guide',
    excerpt: 'Everything you need to know about incorporating plant-based proteins into your diet for balanced nutrition.',
    date: 'February 22, 2023',
    author: 'Michael Johnson',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1511909525232-61113c912358?auto=format&fit=crop&q=80&w=800',
    slug: 'plant-based-proteins-guide'
  },
  {
    id: '5',
    title: 'Kitchen Gadgets That Actually Save Time',
    excerpt: 'From smart appliances to simple tools, these are the kitchen gadgets worth investing in for more efficient cooking.',
    date: 'February 10, 2023',
    author: 'Olivia Thompson',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=800',
    slug: 'kitchen-gadgets-save-time'
  },
  {
    id: '6',
    title: 'The Science Behind Food Pairings',
    excerpt: 'Understand the chemistry and cultural factors that make certain food combinations so delicious.',
    date: 'January 29, 2023',
    author: 'Dr. James Wilson',
    category: 'Food Science',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=800',
    slug: 'science-food-pairings'
  }
];

const categories = ['All', 'Technology', 'Sustainability', 'Seasonal', 'Nutrition', 'Equipment', 'Food Science'];

const BlogPage = () => {
  const [posts, setPosts] = React.useState(dummyBlogPosts);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setPosts(dummyBlogPosts);
    } else {
      const filtered = dummyBlogPosts.filter(post => post.category === category);
      setPosts(filtered);
    }
  };
  
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setPosts(dummyBlogPosts);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = dummyBlogPosts.filter(post => 
      post.title.toLowerCase().includes(term) || 
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
    
    setPosts(filtered);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="From Our Kitchen to Yours" 
          subtitle="Insights, tips, and stories about cooking and nutrition"
          showButton={false}
        />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div className="flex-1">
                <Tabs defaultValue="All" onValueChange={handleCategoryChange}>
                  <TabsList className="flex flex-wrap h-auto">
                    {categories.map(category => (
                      <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="flex w-full md:w-auto gap-2">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-auto"
                />
                <Button onClick={handleSearch} variant="outline">
                  <Search size={18} />
                </Button>
              </div>
            </div>
            
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setPosts(dummyBlogPosts);
                  }}
                >
                  View All Articles
                </Button>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <Button className="bg-brand-orange hover:bg-brand-orange/90">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
