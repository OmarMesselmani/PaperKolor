import { searchColoringPages } from "@/lib/data";
import ColoringCard from "@/components/ColoringCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() || "";

  const results = query ? await searchColoringPages(query) : [];

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-6 pt-8">
        <Breadcrumbs paths={[{ title: "Search", href: "/search" }]} />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 pb-16">
        {query ? (
          <>
            <h2 className="text-4xl font-extrabold my-8 text-gray-800">
              Search results for &quot;{query}&quot;
            </h2>
            {results.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pb-16">
                {results.map(page => (
                  <ColoringCard key={page.id} page={page} />
                ))}
              </div>
            ) : (
              <div className="text-center p-16 bg-white rounded-2xl text-gray-500 border-2 border-dashed border-black/5">
                <p className="text-lg font-bold mb-2">No results found for &quot;{query}&quot;</p>
                <p className="text-sm">Try searching for a different term, like &quot;lion&quot; or &quot;bird&quot;.</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center p-16 bg-white rounded-2xl text-gray-500 border-2 border-dashed border-black/5 mt-8">
            <p className="text-lg font-bold mb-2">Type something to search</p>
            <p className="text-sm">Use the search bar above to find coloring pages.</p>
          </div>
        )}
      </div>
    </>
  );
}
