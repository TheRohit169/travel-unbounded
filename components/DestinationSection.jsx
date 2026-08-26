import DestinationCard from './DestinationCard';

export default function DestinationSection({ title, eyebrow, destinations }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-moss">{eyebrow}</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-forest sm:text-5xl">{title}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Handpicked places for travellers who want more than a checklist of sights.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}
        </div>
      </div>
    </section>
  );
}
