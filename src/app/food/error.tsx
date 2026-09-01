"use client";

import Link from "next/link";

export default function FoodError() {
  return (
    <main className="status-page">
      <p className="eyebrow">Menu interruption</p>
      <h1>We lost the thread.</h1>
      <p>This dish could not be loaded right now.</p>
      <Link className="button button-dark" href="/food">
        Back to the menu
      </Link>
    </main>
  );
}
