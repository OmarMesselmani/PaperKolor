'use client';

import Link from "next/link";
import { ColoringPage } from "@/types";

export default function ColoringCard({ page }: { page: ColoringPage }) {
  return (
    <Link href={`/${page.categorySlug}/${page.slug}`} className="block bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(124,58,237,0.1),0_4px_6px_-2px_rgba(124,58,237,0.05)] hover:border-purple-600/20 group">
      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center border-b border-black/5 p-4">
        <img 
          src={page.thumbnailUrl} 
          alt={page.title} 
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x600?text=Coloring+Page')}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex justify-between items-center bg-white">
        <h3 className="font-bold text-lg text-gray-900 m-0 truncate pr-2">{page.title}</h3>
        <span className="inline-block py-1 px-4 bg-orange-500 text-white rounded-full font-bold shadow-[0_4px_15px_rgba(249,115,22,0.3)] text-sm whitespace-nowrap">Color</span>
      </div>
    </Link>
  );
}
