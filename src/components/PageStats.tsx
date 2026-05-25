'use client';

interface PageStatsProps {
  views?: number;
  downloads?: number;
  likes?: number;
  className?: string;
}

export default function PageStats({ views, downloads, likes, className }: PageStatsProps) {
  return (
    <div className={"flex items-center gap-4 text-xs font-semibold text-gray-500" + (className ? " " + className : "")}>
      <div className="flex items-center gap-1.5 hover:text-purple-600 transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>{views?.toLocaleString() || '1.2K'}</span>
      </div>

      <div className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>{downloads?.toLocaleString() || '850'}</span>
      </div>

      <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <span>{likes?.toLocaleString() || '340'}</span>
      </div>
    </div>
  );
}
