'use client';

import Link from 'next/link';
import { ColoringPage } from '@/types';

interface RelatedCardProps {
  page: ColoringPage;
}

export default function RelatedCard({ page }: RelatedCardProps) {
  const href = page.subCategorySlug
    ? `/${page.categorySlug}/${page.subCategorySlug}/${page.slug}`
    : `/${page.categorySlug}/${page.slug}`;

  return (
    <Link
      href={href}
      className="flex gap-4 p-2 rounded-2xl border border-transparent hover:border-purple-600/10 hover:bg-purple-600/5 transition-all duration-300 group"
    >
      <div className="w-16 h-20 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-black/5 p-1 flex-shrink-0">
        <img
          src={page.thumbnailUrl}
          alt={page.title}
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x200?text=Coloring')}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-1.5 min-w-0">
        <h4 className="font-bold text-sm text-gray-800 m-0 group-hover:text-purple-600 transition-colors truncate">
          {page.title}
        </h4>
        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">
          Free Print 🖨️
        </span>
      </div>
    </Link>
  );
}
