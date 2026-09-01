import type { Metadata } from "next";
import Link from "next/link";
import type { Food } from "../types";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const response = await fetch(
    `https://sombobaeb.cheat.casa/food-items/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return { title: "Food Not Found | M'Hob Khmer" };
  }

  const food: Food = await response.json();

  return {
    title: `${food.name} | M'Hob Khmer`,
    description: food.description,
  };
}

export default async function FoodDetailPage({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://sombobaeb.cheat.casa/food-items/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return (
      <main className="min-h-full bg-[#f7f4ec] px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
            🍽️
          </div>
          <h1 className="mt-6 text-3xl font-bold text-zinc-900">
            Food Not Found
          </h1>
          <p className="mt-3 text-zinc-600">
            We couldn&apos;t find that dish. It may have been removed from
            the menu.
          </p>
          <Link
            href="/food"
            className="mt-8 inline-block rounded-full bg-[#1b6b3d] px-7 py-3 font-semibold text-white transition hover:bg-[#124f2e]"
          >
            ← Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  const food: Food = await response.json();

  const rating =
    food.average_rating != null && food.rating_count > 0
      ? food.average_rating.toFixed(1)
      : null;

  // "មិនមាន" means "none" in Khmer — treat empty/placeholder as no pairing
  const drinkType = food.drink_type?.trim();
  const hasDrink =
    !!drinkType &&
    !["មិនមាន", "none", "n/a", "no", "-"].includes(
      drinkType.toLowerCase()
    );

  return (
    <main className="min-h-full bg-[#f7f4ec]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-8 lg:px-8">
        <nav className="text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-[#1b6b3d]">
            Home
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <Link href="/food" className="hover:text-[#1b6b3d]">
            Menu
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-[#1b6b3d]">{food.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={food.image_url}
              alt={food.name}
              className="h-[380px] w-full object-cover"
            />
          </div>

          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {food.is_trending && (
              <span className="rounded-full bg-[#1b6b3d] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
                🔥 Trending
              </span>
            )}
            {!food.available && (
              <span className="rounded-full bg-zinc-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
                Sold Out
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
            {food.cuisine} · {food.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {food.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            {rating ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 font-semibold text-[#124f2e]">
                ★ {rating}
                <span className="font-normal text-zinc-600">
                  ({food.rating_count})
                </span>
              </span>
            ) : (
              <span className="rounded-full bg-zinc-200 px-3 py-1 font-semibold text-zinc-600">
                New
              </span>
            )}

            {food.meal_types.map((meal) => (
              <span
                key={meal}
                className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-zinc-700"
              >
                {meal}
              </span>
            ))}
          </div>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {food.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="text-3xl font-bold text-[#1b6b3d]">
              ${food.price.toFixed(2)}
            </p>
            {food.popularity_score > 0 && (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-[#1b6b3d]">
                ⭐ {Math.round(food.popularity_score)} popular
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#order"
              className="rounded-full bg-[#1b6b3d] px-8 py-3 font-semibold text-white transition hover:bg-[#124f2e]"
            >
              Order Now
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700">
              ⏱ {food.preparation_time_minutes} min
            </span>
          </div>
        </div>
      </section>

      {/* Nutrition Stats */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
              Nutrition
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Per Serving
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Calories", value: `${food.calories}` },
              { label: "Protein", value: `${food.protein}g` },
              { label: "Carbs", value: `${food.carbs}g` },
              { label: "Fat", value: `${food.fat}g` },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-[#1b6b3d]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Drinks */}
      <section className="bg-emerald-50/60">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
              What&apos;s Inside
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Ingredients
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {food.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700 border border-emerald-200"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {hasDrink && (
            <div className="mt-12 border-t border-emerald-200 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
                Pairing
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Suggested Drink
              </h3>
              <p className="mt-3 text-lg text-zinc-600">{drinkType}</p>
            </div>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="bg-[#1b6b3d] border-t-2 border-[#64b880]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Try {food.name}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#cdd9c7]">
            Order it fresh from M&apos;Hob Khmer and taste authentic
            Khmer cuisine today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-3 font-semibold text-[#124f2e] transition hover:bg-emerald-50"
            >
              Order ${food.price.toFixed(2)}
            </a>
            <Link
              href="/food"
              className="rounded-full border border-white/25 px-8 py-3 font-semibold transition hover:bg-white/10"
            >
              Browse More Dishes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}