'use client';

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()} 
      className="bg-purple-600 text-white border-none py-4 px-8 rounded-xl cursor-pointer text-lg font-bold flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md" 
    >
      <span>🖨️</span> Print Now
    </button>
  );
}
