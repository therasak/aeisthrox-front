import { Quote, Star } from "lucide-react";

/**
 * Testimonials — Marquee version
 * Drop this into Home, About, or Services pages.
 * Usage:  <Testimonials />
 *
 * Behavior:
 * - Cards scroll horizontally in an infinite marquee loop.
 * - Works identically on mobile and desktop (no stacked/grid layout switch).
 * - Auto-scroll pauses on hover (desktop) and on touch (mobile), so people
 *   can actually read a card before it drifts away.
 *
 * SEO NOTE: Real, specific testimonials (with name + location) are strong
 * trust signals for Google and for visitors. Consider adding Review schema
 * (JSON-LD) around this section once you have real client quotes — this can
 * surface star ratings directly in Google search results.
 *
 * Replace the sample data below with real client testimonials + photos
 * once available. Initials-avatars are used as a placeholder so the design
 * works even before you have client photos.
 */

const testimonials = [
  {
    name: "Karthik Raja",
    role: "Homeowner, Tenkasi",
    quote:
      "We wanted our new home to feel modern but still practical for our family. The team understood exactly what we needed and delivered on time, within budget.",
    rating: 5,
  },
  {
    name: "Priya Selvam",
    role: "Boutique Owner, Tenkasi",
    quote:
      "Our new website has genuinely brought in more enquiries than our old one ever did. They explained everything in simple terms, no confusing tech talk.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Business Owner, Tirunelveli",
    quote:
      "Professional from the first meeting to final delivery. What stood out was how honestly they quoted the project, and there were no surprise costs later.",
    rating: 5,
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }) {
  return (
    <article
      className="group relative w-[280px] shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[340px] sm:rounded-3xl sm:p-8"
    >
      <Quote
        size={36}
        className="text-[#2F6FED]/10 absolute top-5 right-5 sm:top-6 sm:right-6"
        strokeWidth={1.5}
      />

      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-[#3A4A63] sm:mt-5 sm:text-base sm:leading-7">
        "{t.quote}"
      </p>

      <div className="mt-6 flex items-center gap-3 sm:mt-8">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2F6FED]/10 text-sm font-semibold text-[#2F6FED] sm:h-12 sm:w-12">
          {initials(t.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0B1E3D] sm:text-base">
            {t.name}
          </p>
          <p className="text-xs text-[#52698A] sm:text-sm">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  // Duplicate the list so the track can loop seamlessly from -50% back to 0%.
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-label="Client testimonials"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
          CLIENT STORIES
        </span>

        <h2 className="mt-5 text-2xl font-bold text-[#0B1E3D] sm:mt-6 sm:text-3xl lg:text-4xl">
          Trusted by Homeowners &amp; Businesses in Tenkasi
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#52698A] sm:mt-4 sm:text-base">
          Real feedback from real projects across Tenkasi and Tamil Nadu.
        </p>
      </div>

      {/* Marquee viewport */}
      <div className="testimonial-marquee mt-10 sm:mt-12">
        <div className="testimonial-marquee__track">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 40px,
            black calc(100% - 40px),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 40px,
            black calc(100% - 40px),
            transparent 100%
          );
        }

        .testimonial-marquee__track {
          display: flex;
          width: max-content;
          gap: 1.25rem;
          animation: testimonial-scroll 32s linear infinite;
        }

        @media (min-width: 640px) {
          .testimonial-marquee__track {
            gap: 1.5rem;
          }
        }

        .testimonial-marquee:hover .testimonial-marquee__track,
        .testimonial-marquee:active .testimonial-marquee__track {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* Exactly half the track width = one full set of (non-duplicated) cards */
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee__track {
            animation: none;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;