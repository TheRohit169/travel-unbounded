'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#fbfaf6]/95 backdrop-blur-md">
      <div className="container-shell flex h-[74px] items-center justify-between">
        <Link href="/" onClick={closeMenu} className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-lg text-white shadow-md">TU</span>
          <span>
            <span className="block text-base font-extrabold tracking-wide text-forest">TRAVEL UNBOUNDED</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-moss sm:block">Journeys beyond the ordinary</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link className="focus-ring rounded text-sm font-semibold text-slate-700 transition hover:text-forest" href="/">Home</Link>
          <Link className="focus-ring rounded text-sm font-semibold text-slate-700 transition hover:text-forest" href="/about">About</Link>
          <Link className="focus-ring rounded text-sm font-semibold text-slate-700 transition hover:text-forest" href="/contact">Contact</Link>
          <Link className="focus-ring rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-moss" href="/contact">Plan Your Trip <span aria-hidden="true">→</span></Link>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-lg p-2 text-forest md:hidden"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="my-1.5 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-emerald-950/10 bg-[#fbfaf6] px-4 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
          <div className="container-shell flex flex-col gap-1">
            <Link onClick={closeMenu} className="focus-ring rounded-xl px-4 py-3 font-semibold hover:bg-emerald-50" href="/">Home</Link>
            <Link onClick={closeMenu} className="focus-ring rounded-xl px-4 py-3 font-semibold hover:bg-emerald-50" href="/about">About</Link>
            <Link onClick={closeMenu} className="focus-ring rounded-xl px-4 py-3 font-semibold hover:bg-emerald-50" href="/contact">Contact</Link>
            <Link onClick={closeMenu} className="mt-2 rounded-xl bg-forest px-4 py-3 text-center font-bold text-white" href="/contact">Plan Your Trip →</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
