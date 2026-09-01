import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f7f4ec] text-zinc-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0f3d24] text-[#f7f4ec]">
        {/* decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f7a3e]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d9c77a]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Text */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d9c77a]">
              Welcome to M&apos;Hob Khmer
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Taste the
              <span className="block text-[#64b880]">True Flavours</span>
              of Cambodia
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cdd9c7]">
              Authentic Khmer dishes made with fresh ingredients,
              traditional recipes, and generations of Cambodian
              cooking heritage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/food"
                className="rounded-full bg-[#d97706] px-7 py-3 font-semibold text-white transition hover:bg-[#b45309]"
              >
                Explore Our Menu
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/25 px-7 py-3 font-semibold transition hover:bg-white/10"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/khmer-food.jpg"
                alt="Traditional Khmer food"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#f7f4ec] p-5 shadow-lg text-zinc-900">
              <p className="text-2xl font-bold text-[#1b6b3d]">100%</p>
              <p className="text-sm text-zinc-600">Authentic Khmer Taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="border-b border-[#e5e0d4]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 text-center sm:grid-cols-3 lg:px-8">
          {[
            { value: "50+", label: "Traditional Dishes" },
            { value: "20+", label: "Years of Experience" },
            { value: "100%", label: "Fresh Ingredients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-[#1b6b3d]">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes Teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
              Our Menu
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Dishes You&apos;ll Love
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              From aromatic curries to grilled favourites, every plate
              is cooked to order with fresh, local ingredients.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🍛",
                title: "Curries & Stews",
                text: "Rich coconut curries simmered with lemongrass, galangal, and kroeung spices.",
              },
              {
                emoji: "🍢",
                title: "Grilled Specials",
                text: "Char-grilled meats and seafood with tangy Khmer dipping sauces.",
              },
              {
                emoji: "🥗",
                title: "Fresh & Light",
                text: "Crisp salads, fresh veggies, and herb-forward Khmer classics.",
              },
            ].map((dish) => (
              <div
                key={dish.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  {dish.emoji}
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">
                  {dish.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-600">{dish.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/food"
              className="inline-block rounded-full bg-[#1b6b3d] px-8 py-3 font-semibold text-white transition hover:bg-[#124f2e]"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-emerald-50/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1b6b3d]">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Family Tradition of Khmer Cooking
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              M&apos;Hob Khmer began in a small family kitchen, sharing
              recipes passed down for generations. Today, we bring that
              same home-cooked warmth to every guest who walks through
              our doors.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block rounded-full border border-[#1b6b3d] px-7 py-3 font-semibold text-[#1b6b3d] transition hover:bg-[#1b6b3d] hover:text-white"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/khmer-food.jpg"
              alt="Inside our Khmer kitchen"
              className="h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#d97706]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for an Authentic Khmer Meal?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-100">
            Explore our menu and taste the true flavours of Cambodia today.
          </p>
          <Link
            href="/food"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#b45309] transition hover:bg-orange-50"
          >
            Browse the Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
