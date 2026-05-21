'use client';

import { useState } from 'react';

interface LikeButtonProps {
  initialLikes?: number;
}

export default function LikeButton({ initialLikes = 340 }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikesCount(prev => prev + 1);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`py-4 px-8 rounded-xl text-lg font-bold flex items-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-md border select-none cursor-pointer ${
        liked 
          ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100/80' 
          : 'bg-white text-gray-700 border-black/5 hover:bg-gray-50'
      }`}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={liked ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${liked ? 'scale-110 text-red-500 animate-pulse' : 'text-gray-400'}`}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
      <span>{likesCount.toLocaleString()}</span>
    </button>
  );
}
