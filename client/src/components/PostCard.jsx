import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="w-full h-40 object-cover"
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-2">{post.title}</div>
        <p className="text-gray-700 text-base italic">{post.category}</p>
        <Link
          to={`/post/${post.slug}`}
          className="text-blue-500 border border-blue-500 hover:bg-purple-500 hover:text-white px-4 py-1 rounded-full text-sm mt-3 inline-block"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
