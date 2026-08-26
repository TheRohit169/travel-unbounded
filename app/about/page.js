export const metadata = {
  title: 'About Us | Travel Unbounded',
  description: 'Learn about Travel Unbounded and our approach to personally curated experiential travel.'
};

const values = [
  ['✦', 'Personally Vetted Experiences', 'Every destination, stay and activity is carefully selected and personally experienced by our team.'],
  ['⌁', 'Local Guides', 'Connect with knowledgeable local experts who know the destination beyond the usual tourist routes.'],
  ['◈', 'Custom Itineraries', 'Every journey is designed around your interests, travel style and expectations.'],
  ['◷', '24×7 Support', 'Our travel experts remain available throughout your journey whenever you need assistance.']
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-forest py-20 text-white sm:py-28"><div className="container-shell"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Our story</p><h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">India&apos;s Most Trusted Experiential Travel Experts</h1></div></section>
      <section className="py-20 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-xl font-semibold leading-9 text-forest sm:text-2xl">Travel Unbounded was born from a simple belief — that the best journeys aren&apos;t sold from a catalogue. They&apos;re built around the people taking them.</p><p className="mt-7 leading-8 text-slate-600">Headquartered in Bangalore with offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.</p><p className="mt-7 leading-8 text-slate-600">From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.</p></div><div className="rounded-[30px] bg-cream p-8 sm:p-10"><p className="text-xs font-black uppercase tracking-[0.2em] text-moss">What matters to us</p><ul className="mt-7 space-y-5 text-sm leading-6 text-slate-700"><li><strong className="text-forest">Thoughtfulness.</strong> We favour meaningful experiences over crowded checklists.</li><li><strong className="text-forest">Human connection.</strong> Local people make places memorable.</li><li><strong className="text-forest">Ease.</strong> Good planning should make travel feel lighter.</li></ul></div></div></section>
      <section className="bg-cream py-20 sm:py-24"><div className="container-shell"><p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">Why choose us</p><h2 className="mt-3 text-4xl font-black text-forest sm:text-5xl">Travel expertise with a human touch.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(([icon, title, text]) => <article key={title} className="rounded-3xl bg-white p-6 shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-50 text-xl text-forest">{icon}</span><h3 className="mt-6 text-lg font-extrabold text-forest">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>
      <section className="py-20 sm:py-24"><div className="container-shell"><p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">Find us</p><h2 className="mt-3 text-4xl font-black text-forest sm:text-5xl">Office locations</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[
        ['Bengaluru — Headquarters', '541, 7th Main Rd, HAL 2nd Stage', 'Indiranagar, Bengaluru – 560008', 'India'],
        ['Kochi — Kerala Office', 'LR Towers, S Janatha Road', 'Palavivatton, Kochi – 682025', 'India'],
        ['Nairobi — Kenya Office', 'Westpark Towers, Muthithi Road', 'Nairobi, P.O. Box 6950', 'Postal Code 00100, Kenya']
      ].map(([title, line1, line2, line3]) => <address key={title} className="not-italic rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm"><h3 className="text-xl font-extrabold text-forest">{title}</h3><p className="mt-5 text-sm leading-7 text-slate-600">{line1}<br />{line2}<br />{line3}</p></address>)}</div></div></section>
    </div>
  );
}
