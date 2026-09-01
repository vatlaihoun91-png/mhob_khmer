"use client";

import { useEffect, useState } from "react";
import FoodCard from "@/components/FoodCard";
import type { FoodItem } from "@/lib/food-api";

const FOOD_ITEMS_URL =
  "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100";

export default function FoodPage() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchFoods() {
      try {
        const response = await fetch(FOOD_ITEMS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load the menu.");
        }

        const products: unknown = await response.json();
        setFoods(
          Array.isArray(products)
            ? (products as FoodItem[]).filter((food) => food.available)
            : [],
        );
      } catch (fetchError) {
        if (
          fetchError instanceof DOMException &&
          fetchError.name === "AbortError"
        ) {
          return;
        }

        setError("The menu could not be loaded. Please try again.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchFoods();

    return () => controller.abort();
  }, []);

  return (
    <main className="food-list-page page-shell">
      {isLoading && <p className="menu-state">Loading the menu...</p>}
      {error && <p className="menu-state menu-state-error">{error}</p>}
      {!isLoading && !error && (
        <div className="food-menu-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
      )}
    </main>
  );
}
