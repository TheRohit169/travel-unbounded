import Hero from '@/components/Hero';
import DestinationSection from '@/components/DestinationSection';
import { indiaDestinations, internationalDestinations } from '@/data/destinations';

export const metadata = {
  title: 'Travel Unbounded | Experiential Travel Experts',
  description: 'Discover unforgettable journeys with Travel Unbounded. Explore India and international destinations with personally curated travel experiences.'
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-moss">Why travel with us</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-forest sm:text-5xl">The best trips feel personal — not packaged.</h2>
          </div>
          <p className="text-sm leading-7 text-slate-600">We pair thoughtful planning with on-ground knowledge so every stay, experience and route feels considered from the first conversation to the journey home.</p>
        </div>
        <div className="container-shell mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[['01', 'Personally vetted', 'Every destination, stay and activity is carefully selected.'], ['02', 'Local expertise', 'Connect with guides who know the destination beyond the obvious.'], ['03', 'Made for you', 'Your itinerary reflects your interests, pace and expectations.'], ['04', '24×7 support', 'A travel expert remains available throughout your journey.']].map(([number, title, text]) => (
            <div key={number} className="rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-sm">
              <span className="text-xs font-black tracking-[0.2em] text-gold">{number}</span>
              <h3 className="mt-8 text-xl font-extrabold text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <div id="destinations" className="bg-[#fbfaf6]">
        <DestinationSection eyebrow="India" title="Journeys closer to home" destinations={indiaDestinations} />
        <div className="border-t border-emerald-950/5" />
        <DestinationSection eyebrow="Beyond India" title="International escapes" destinations={internationalDestinations} />
      </div>
      <section className="bg-forest py-20 text-white sm:py-24">
        <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Ready when you are</p><h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Tell us where you want to go. We&apos;ll help shape the story.</h2></div>
          <a href="/contact" className="focus-ring shrink-0 rounded-full bg-[#e4b85e] px-7 py-4 font-extrabold text-forest transition hover:bg-[#f0c972]">Plan Your Trip →</a>
        </div>
      </section>
    </>
  );
}
