import Image from 'next/image';
import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-emerald-950/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={destination.image} alt={`${destination.name}, ${destination.country}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-x-0 top-0 flex justify-between p-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-forest backdrop-blur">{destination.category === 'india' ? 'India' : 'International'}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div><h3 className="text-2xl font-extrabold text-forest">{destination.name}</h3><p className="mt-1 text-sm font-semibold text-moss">{destination.country}</p></div>
          <span className="mt-1 text-sm font-bold text-slate-500">From {destination.price}</span>
        </div>
        <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">{destination.description}</p>
        <div className="mt-6 flex gap-3">
          <Link href={`/contact?destination=${encodeURIComponent(destination.name)}`} className="focus-ring flex-1 rounded-full border border-forest px-4 py-3 text-center text-sm font-bold text-forest transition hover:bg-emerald-50">View Details</Link>
          <Link href={`/contact?destination=${encodeURIComponent(destination.name)}`} className="focus-ring flex-1 rounded-full bg-forest px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-moss">Enquire</Link>
        </div>
      </div>
    </article>
  );
}
