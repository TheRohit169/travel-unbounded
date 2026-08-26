import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-extrabold text-forest">TU</span>
            <span className="text-lg font-extrabold tracking-wide">TRAVEL UNBOUNDED</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-emerald-100">Thoughtfully designed journeys that bring together comfort, culture, adventure and authentic local experiences.</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Bengaluru · Kochi · Nairobi</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Explore</h2>
          <div className="flex flex-col gap-3 text-sm text-emerald-100">
            <Link className="hover:text-white" href="/">Home</Link>
            <Link className="hover:text-white" href="/about">About</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
      
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-emerald-200 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Travel Unbounded. All rights reserved.</span>
          <span>Designed for unforgettable journeys.</span>
        </div>
      </div>
    </footer>
  );
}
