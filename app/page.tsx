import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className="mt-12 max-width padding-y padding-x">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Category</h1>
          <p>Explore the cars you mike like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
