import { getCategoryBySlug, getCategories, getColoringPages, getColoringPageBySlug } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ColoringCard from "@/components/ColoringCard";
import PrintButton from "@/components/PrintButton";
import DownloadPdf from "@/components/DownloadPdf";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const lastSlug = slug[slug.length - 1];

  const breadcrumbPaths = await Promise.all(slug.map(async (s, i) => {
    const cat = await getCategoryBySlug(s);
    const page = await getColoringPageBySlug(s);
    return {
      title: cat?.title || page?.title || s,
      href: `/${slug.slice(0, i + 1).join('/')}`
    };
  }));

  const coloringPage = await getColoringPageBySlug(lastSlug);
  if (coloringPage) {
    return (
      <>
        <div className="max-w-[1240px] mx-auto px-6 pt-8">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
        
        <div className="max-w-[1240px] mx-auto px-6 pb-16">
          <div className="flex gap-12 items-start flex-wrap mt-8">
            <div className="flex-[1.2] min-w-[320px] bg-white p-6 rounded-3xl shadow-[0_10px_15px_-3px_rgba(124,58,237,0.1),0_4px_6px_-2px_rgba(124,58,237,0.05)] border border-black/5">
              <img src={coloringPage.imageUrl} alt={coloringPage.title} className="w-full h-auto rounded-xl block" />
            </div>
            <div className="flex-1 min-w-[320px] pt-4">
              <span className="inline-block py-2 px-5 bg-orange-500 text-white rounded-full font-bold mb-8 shadow-[0_4px_15px_rgba(249,115,22,0.3)]">Coloring Page 🎨</span>
              <h2 className="text-5xl font-black bg-gradient-to-br from-purple-600 to-orange-500 bg-clip-text text-transparent mb-6">{coloringPage.title}</h2>
              <p className="text-lg leading-relaxed text-gray-500 mb-10">{coloringPage.description}</p>
              
              <div className="flex gap-4 flex-wrap print:hidden">
                <PrintButton />
                <DownloadPdf imageUrl={coloringPage.imageUrl} title={coloringPage.title} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const category = await getCategoryBySlug(lastSlug);
  if (category) {
    const subCategories = await getCategories(category.slug);
    const pages = await getColoringPages(category.slug);

    return (
      <>
        <div className="max-w-[1240px] mx-auto px-6 pt-8">
          <Breadcrumbs paths={breadcrumbPaths} />
          <h2 className="text-4xl font-extrabold my-8 text-gray-800">{category.title}</h2>
        </div>
        
        <div className="max-w-[1240px] mx-auto px-6">
          {subCategories.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3 before:content-[''] before:block before:w-1 before:h-6 before:bg-purple-600 before:rounded-sm">Subcategories</h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pb-16">
                {subCategories.map(sub => <CategoryCard key={sub.id} category={sub} />)}
              </div>
            </div>
          )}

          {pages.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3 before:content-[''] before:block before:w-1 before:h-6 before:bg-purple-600 before:rounded-sm">Coloring Pages</h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pb-16">
                {pages.map(page => <ColoringCard key={page.id} page={page} />)}
              </div>
            </div>
          )}
          
          {subCategories.length === 0 && pages.length === 0 && (
            <div className="text-center p-16 bg-white rounded-2xl text-gray-500 border-2 border-dashed border-black/5">
              <p>No drawings found in this category yet. Stay tuned!</p>
            </div>
          )}
        </div>
      </>
    );
  }

  return notFound();
}
