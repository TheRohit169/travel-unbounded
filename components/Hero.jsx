"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % heroImages.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-cover bg-center text-white transition-all duration-1000"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(5, 35, 26, 0.38),
            rgba(5, 35, 26, 0.72)
          ),
          url("${heroImages[currentImage]}")
        `,
      }}
    >
      <div className="container-shell relative flex min-h-[680px] items-center py-20">
        <div className="max-w-3xl">

          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
            India's Most Trusted Travel Experts
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Journey{" "}
            <span
              style={{
                color: "#C99A3D",
                fontStyle: "italic",
                fontWeight: 400,
                display: "inline",
              }}
            >
              Beyond
            </span>{" "}
            the Ordinary
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Handcrafted expeditions to Kenya's Masai Mara, Vietnam's ancient
            waterways, Ladakh's sky-high monasteries, and the high passes of
            Himachal. Never a template. Always extraordinary.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring rounded-full bg-[#e4b85e] px-7 py-4 text-center font-extrabold text-forest shadow-xl transition hover:-translate-y-1 hover:bg-[#f0c972]"
              href="/contact"
            >
              Plan Your Trip{" "}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              className="focus-ring rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              href="#destinations"
            >
              Explore Destinations
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-4 gap-5 border-t border-white/20 pt-6">

            <div>
              <p className="text-2xl font-extrabold">1000+</p>
              <p className="mt-1 text-xs text-white/65">
                Journeys Crafted
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold">25+</p>
              <p className="mt-1 text-xs text-white/65">
                Destinations
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold">100+</p>
              <p className="mt-1 text-xs text-white/65">
                Satisfaction Rate
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold">150+</p>
              <p className="mt-1 text-xs text-white/65">
                Five-Star Reviews
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentImage === index
                ? "w-8 bg-[#e4b85e]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
<div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
  <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
    Scroll
  </span>

  <div className="relative h-12 w-px overflow-hidden bg-white/30">
    <div className="absolute left-0 top-0 h-5 w-px animate-scroll-line bg-white" />
  </div>
</div>
    </section>
  );
}