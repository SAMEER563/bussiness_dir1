import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, description, imgUrl, post }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={imgUrl}
        alt={name}
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Post Title */}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        {/* Post Description */}
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        
        {/* Read More Link */}
        <Link 
          to='/' // Navigate to detailed post page using slug
          className="block text-center w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
