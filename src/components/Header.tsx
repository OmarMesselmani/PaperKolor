import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import { Category } from "@/types";

export default function Header({ categories }: { categories: Category[] }) {
  return (
    <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-purple-600/10 py-4 transition-all duration-300 print:hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center w-full gap-4">
          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <NavMenu categories={categories} />
              <Link href="/" className="no-underline">
                <h1 className="bg-gradient-to-br from-purple-600 to-orange-500 bg-clip-text text-transparent text-2xl md:text-3xl font-extrabold m-0">🎨 PaperKolor</h1>
              </Link>
            </div>
          </div>

          <SearchBar />

          <div className="flex items-center gap-6 order-2 sm:order-none">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
