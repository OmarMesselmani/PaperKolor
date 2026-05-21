import Link from "next/link";
import { Category } from "@/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={category.parentSlug ? `/${category.parentSlug}/${category.slug}` : `/${category.slug}`} className="bg-white rounded-2xl overflow-hidden border border-black/5 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm flex flex-col hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(124,58,237,0.1),0_4px_6px_-2px_rgba(124,58,237,0.05)] hover:border-purple-600/20 group">
      <div className="h-60 bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center text-8xl transition-transform duration-500 group-hover:scale-105">
        <div className="placeholder-img">🎨</div>
      </div>
      <div className="p-5 text-center bg-white border-t border-black/5">
        <h3 className="text-xl font-bold text-gray-800 m-0 mb-4">{category.title}</h3>
        
        {/* Stats Footer */}
        <div className="flex justify-center items-center gap-4 text-xs font-semibold text-gray-500">
          <div className="flex items-center gap-1.5 group/stat hover:text-purple-600 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/stat:opacity-100 group-hover/stat:scale-110 transition-all">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{category.views?.toLocaleString() || '1.2K'}</span>
          </div>
          
          <div className="flex items-center gap-1.5 group/stat hover:text-orange-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/stat:opacity-100 group-hover/stat:scale-110 transition-all">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{category.downloads?.toLocaleString() || '850'}</span>
          </div>
          
          <div className="flex items-center gap-1.5 group/stat hover:text-red-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/stat:opacity-100 group-hover/stat:scale-110 transition-all">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>{category.likes?.toLocaleString() || '340'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
