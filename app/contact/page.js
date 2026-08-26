import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Plan Your Trip | Travel Unbounded',
  description: 'Share your travel plans with Travel Unbounded and let our experts design an unforgettable journey.'
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const destination = typeof params?.destination === 'string' ? params.destination : '';

  return (
    <div className="bg-cream">
      <section className="bg-forest py-20 text-white sm:py-24"><div className="container-shell"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Start a conversation</p><h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">Let&apos;s plan a journey worth remembering.</h1><p className="mt-6 max-w-2xl leading-7 text-emerald-100">Tell us a little about your trip. We&apos;ll take it from there with thoughtful recommendations and a human conversation.</p></div></section>
      <section className="py-14 sm:py-20"><div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start"><div className="lg:sticky lg:top-28"><p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">Your next chapter</p><h2 className="mt-3 text-3xl font-black text-forest sm:text-4xl">A few details are all we need to begin.</h2><p className="mt-5 leading-7 text-slate-600">Share your dates, group size and preferred comfort level. Our team will contact you within 24 hours.</p><div className="mt-8 rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-sm"><p className="text-sm font-bold text-forest">What happens next?</p><ol className="mt-5 space-y-4 text-sm leading-6 text-slate-600"><li><span className="font-black text-gold">01</span> We review your enquiry.</li><li><span className="font-black text-gold">02</span> A travel expert contacts you.</li><li><span className="font-black text-gold">03</span> We shape your itinerary together.</li></ol></div></div><BookingForm destination={destination} /></div></section>
    </div>
  );
}
