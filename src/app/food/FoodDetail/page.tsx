import Link from "next/link";
import type { Food } from "../types";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function FoodDetail({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://sombobaeb.cheat.casa/food-items/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return (
      <main className="min-h-screen bg-zinc-50 px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-zinc-600">Food not found</p>
          <Link
            href="/food"
            className="mt-6 inline-block rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
          >
            ← Back to menu
          </Link>
        </div>
      </main>
    );
  }

  const food: Food = await response.json();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/food"
          className="mb-6 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
        >
          ← Back to menu
        </Link>

        <img
          src={food.image_url}
          alt={food.name}
          className="h-80 w-full rounded-3xl object-cover"
        />

        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            {food.name}
          </h1>

          <p className="mt-3 text-zinc-600">
            {food.description}
          </p>

          <p className="mt-5 text-2xl font-bold text-amber-700">
            ${food.price.toFixed(2)}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-500">Calories</p>
              <p className="mt-2 text-xl font-bold">
                {food.calories}
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-500">Protein</p>
              <p className="mt-2 text-xl font-bold">
                {food.protein}g
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-500">Carbs</p>
              <p className="mt-2 text-xl font-bold">
                {food.carbs}g
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-500">Fat</p>
              <p className="mt-2 text-xl font-bold">
                {food.fat}g
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Ingredients
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              {food.ingredients.join(", ")}
            </p>
          </div>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Preparation Time
            </h2>

            <p className="mt-3 text-zinc-600">
              {food.preparation_time_minutes} minutes
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}