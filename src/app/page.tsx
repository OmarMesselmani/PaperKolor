import { getCategories } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";

export default async function Home() {
  const mainCategories = await getCategories();

  return (
    <>
      <Hero />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 pb-16">
          {mainCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
