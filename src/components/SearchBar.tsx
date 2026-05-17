'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
    // Implement search logic or redirection here
  };

  return (
    <form className="relative w-full max-w-[400px] mx-0 md:mx-8 print:hidden group" onSubmit={handleSearch}>
      <svg 
        className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-10 ${isFocused ? 'text-purple-600 -translate-y-[calc(50%+1px)]' : 'text-gray-400'}`}
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={isFocused ? "2.5" : "2"} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input 
        type="text" 
        className="w-full py-2.5 pr-4 pl-11 bg-white border border-purple-600/10 rounded-xl font-inherit text-[0.95rem] text-gray-800 transition-all duration-300 shadow-sm focus:outline-none focus:border-purple-600 focus:shadow-[0_10px_15px_-3px_rgba(124,58,237,0.1),0_4px_6px_-2px_rgba(124,58,237,0.05)] focus:-translate-y-[1px] dir-rtl:pr-11 dir-rtl:pl-4"
        placeholder="Search for coloring pages..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </form>
  );
}
