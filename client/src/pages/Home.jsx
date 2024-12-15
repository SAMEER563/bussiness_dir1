import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../components/Card';  // Importing Card component
import PostCard from '../components/PostCard';

// Dummy categories for the posts
const categories = ['All', 'Restaurants', 'Retail', 'Services', 'Technology', 'Health', 'Entertainment'];


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');  // Category filter state
  const [searchQuery, setSearchQuery] = useState('');  // Search query state
  const [posts, setPosts] = useState([]);  // Posts state
  const navigate = useNavigate();  // Hook to navigate between pages

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts by selected category and search query
  const filteredPosts = posts.filter((post) => {
    // Match category
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    // Match search query
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Handle card click to navigate to post details
  const handlePostClick = (slug) => {
    navigate(`/post/${slug}`);  // Redirect to post detail page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-screen-lg mx-auto text-center">

        {/* Header Section */}
        <div className="flex flex-col gap-5 my-10">
          <span className="m-auto px-4 py-2 rounded-full bg-gray-100 text-red-500 font-medium">
            No.1 Business Directory Website
          </span>
          <h1 className="text-5xl font-bold">
            Search & <br /> Get Your <span className="text-purple-500">Nearby Business</span>
          </h1>
          <p>This is the first page that users will see when they visit the website. It contains a search bar to search for businesses.</p>
          
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md mx-auto shadow-lg border border-gray-100 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search for posts"
              className="flex-grow py-3 px-4 border-none outline-none text-gray-700"
              aria-label="Search for posts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-purple-500 text-white px-6 py-3 hover:bg-purple-600 transition-all">
              Search
            </button>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="mb-6">
          {/* Dropdown for small screens */}
          <div className="block md:hidden">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Button group for larger screens */}
          <div className="hidden md:flex justify-center">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mx-2 px-4 py-2 rounded-full font-medium ${selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --------- Post Card Section --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 cursor-pointer">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post.slug} 
                onClick={() => handlePostClick(post.slug)} 
                className="cursor-pointer"
                >
                <PostCard key={post._id} post={post}  />
              </div>
            ))
          ) : (
            <p>No businesses found matching your search.</p>
          )}
        </div>

        {/* Link to View All Businesses */}
        <div className="mt-10">
          <Link 
            to="/search" 
           
          >
            <button className="bg-purple-500 text-white px-4 py-1 mb-4 rounded-full" aria-label="View All Businesses">
              View All Businesses
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
