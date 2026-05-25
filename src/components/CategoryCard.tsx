import Link from "next/link";
import { Category } from "@/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={category.parentSlug ? `/${category.parentSlug}/${category.slug}` : `/${category.slug}`} className="bg-white rounded-2xl overflow-hidden border border-black/5 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm flex flex-col hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(124,58,237,0.1),0_4px_6px_-2px_rgba(124,58,237,0.05)] hover:border-purple-600/20 group">
      <div className="h-60 bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center text-8xl transition-transform duration-500 group-hover:scale-105">
        <div className="placeholder-img">🎨</div>
      </div>
      <div className="p-5 text-center bg-white border-t border-black/5">
        <h3 className="text-xl font-bold text-gray-800 m-0">{category.title}</h3>
      </div>
    </Link>
  );
}
