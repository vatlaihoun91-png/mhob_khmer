import type { Metadata } from "next";
import Link from "next/link";

type Food = {
  id: string | number;
  image_url: string;
  name: string;
  is_trending: boolean;
  category: string;
  description: string;
  price: number;
  preparation_time_minutes: number;
};

export const metadata: Metadata = {
  title: "Our Menu | M'Hob Khmer",
  description:
    "Browse authentic Khmer dishes and drinks, made with fresh ingredients and traditional recipes.",
};

export default async function FoodPage() {
  const response = await fetch("https://sombobaeb.cheat.casa/food-items", {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <main className="min-h-full bg-[#f7f4ec] px-6 py-20 text-center">
        <p className="text-lg text-zinc-600">
          Unable to load the menu right now. Please try again later.
        </p>
      </main>
    );
  }

  const foods: Food[] = await response.json();

  return (
    <main className="min-h-full bg-[#f7f4ec] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
            M&apos;Hob Khmer
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Our Menu
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Explore authentic Khmer dishes and drinks from our kitchen.
          </p>
        </div>

        {foods.length === 0 ? (
          <p className="mt-16 text-center text-zinc-500">
            No food items available yet.
          </p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <Link
                key={food.id}
                href={`/food/${food.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={food.image_url}
                    alt={food.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  {food.is_trending && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#1b6b3d] px-3 py-1 text-xs font-semibold text-white">
                      Trending
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1b6b3d]">
                    {food.category}
                  </p>

                  <h2 className="mt-2 line-clamp-1 text-xl font-bold text-zinc-900">
                    {food.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">
                    {food.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1b6b3d]">
                      ${food.price.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-zinc-500">
                      {food.preparation_time_minutes} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}