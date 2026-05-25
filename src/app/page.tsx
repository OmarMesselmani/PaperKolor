import { getCategories } from "@/lib/data";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";

export default async function Home() {
  const mainCategories = await getCategories();

  return (
    <>
      <Hero />
      <CategoryGrid categories={mainCategories} />
    </>
  );
}
