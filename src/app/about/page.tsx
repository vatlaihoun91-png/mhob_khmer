import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | M'Hob Khmer",
  description:
    "Learn more about M'Hob Khmer and our passion for authentic Khmer cuisine.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#faf8f3] text-zinc-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* Text */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              M&apos;Hob Khmer
            </p>

            <h1 className="max-w-xl text-5xl font-bold tracking-tight sm:text-6xl">
              The Taste of
              <span className="block text-amber-700">
                Cambodia
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              We celebrate the rich flavours, traditions, and hospitality
              of Cambodian cuisine. Every dish tells a story of our culture,
              our people, and our love for Khmer food.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/products"
                className="rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Explore Our Menu
              </a>

              <a
                href="#story"
                className="rounded-full border border-zinc-300 px-6 py-3 font-semibold transition hover:bg-white"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Food Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/khmer-food.jpg"
                alt="Traditional Khmer food"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-lg">
              <p className="text-2xl font-bold text-amber-700">100%</p>
              <p className="text-sm text-zinc-600">
                Khmer Tradition
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Our Story */}
      <section id="story" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Sharing the Soul of Khmer Cuisine
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              M&apos;Hob Khmer was created with a simple passion:
              to share the authentic flavours of Cambodia with everyone.
              From traditional recipes to carefully selected ingredients,
              we want every meal to feel like a journey through Khmer culture.
            </p>
          </div>

        </div>
      </section>


      {/* Values */}
      <section className="bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Values
            </h2>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                🌾
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Fresh Ingredients
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                We believe great food starts with fresh and carefully
                selected ingredients.
              </p>
            </div>


            {/* Card 2 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                🍲
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Traditional Recipes
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                We respect traditional Khmer recipes while presenting
                them in a welcoming modern way.
              </p>
            </div>


            {/* Card 3 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                ❤️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Made With Passion
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Every dish is prepared with care, passion, and respect
                for Cambodian food culture.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-amber-700">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Discover the Flavours of Cambodia
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-amber-50">
            Come and experience the taste, traditions, and hospitality
            of Khmer cuisine.
          </p>

          <a
            href="/products"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
          >
            View Our Menu
          </a>

        </div>
      </section>

    </main>
  );
}