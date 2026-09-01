import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2f2f1] px-6 py-12">
      <div className="flex w-full max-w-[47.5rem] flex-col items-center justify-center text-center">
        <h1 className="text-[5.5rem] font-black leading-none tracking-[-0.08em] text-[#2f4255] sm:text-[7rem] lg:text-[9rem]">
          404
        </h1>

        <h2 className="mt-4 text-[2.2rem] font-medium tracking-[-0.04em] text-[#2f4255] sm:text-[3rem] lg:text-[4rem]">
          Page Not Found
        </h2>

        <p className="mt-7 max-w-[42.5rem] text-lg text-[#5a6472] sm:text-[1.65rem] lg:text-[2rem]">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex items-center justify-center rounded-xl bg-[#3a9ae5] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_rgba(58,154,229,0.28)] transition-colors duration-200 hover:bg-[#2a8fe0]"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
