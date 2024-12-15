import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const res = await fetch(`/api/post/getPost/${id}`);
        const data = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (!post) {
    return <p>Loading post details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img 
        src={`http://localhost:5000/uploads/${post.thumbnail}`} 
        alt={post.title} 
        className="w-full h-96 object-cover mb-6"
      />
      <p className="text-lg text-gray-700">{post.description}</p>
      <div className="mt-4">
        <p className="font-semibold">Category: {post.category}</p>
        <p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="mt-6">
        <p className="text-lg">{post.content}</p> {/* Assuming you store the full content in `post.content` */}
      </div>
    </div>
  );
};

export default PostDetails;
