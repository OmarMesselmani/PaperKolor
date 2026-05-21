'use client';

import { useState } from 'react';

export default function DownloadPdf({ imageUrl, title, pdfUrl }: { imageUrl: string, title: string, pdfUrl?: string }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      if (pdfUrl) {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = `${title}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
      // سنقوم باستدعاء الـ API الذي سننشئه لاحقاً
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl, title }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={loading}
      className={`bg-orange-500 text-white border-none py-4 px-8 rounded-xl text-lg font-bold flex items-center gap-2 shadow-sm hover:shadow-md transition-all ${loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-orange-600'}`}
    >
      <span>📥</span> {loading ? 'Preparing...' : 'Download PDF'}
    </button>
  );
}
