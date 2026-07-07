import {
  Monitor,
  Smartphone,
  Paintbrush,
  Building2,
  Megaphone,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { services } from "../data/services";

/**
 * SEO NOTES (add these in your page <head> / Helmet / Next metadata, not visible in the UI):
 *
 * <title>Interior Design & Web Design Company in Tenkasi | Aiesthrox</title>
 * <meta name="description" content="Looking for interior designers or a web design company in Tenkasi, Tamil Nadu? Aiesthrox is a Vadakarai-based young creative team offering interior design, web design, app development and digital marketing services across Tenkasi, Tirunelveli, and Tamil Nadu. Get a free consultation today." />
 * <meta name="keywords" content="interior design Tenkasi, web design company Tenkasi, best interior designers Tamil Nadu, web developers Tenkasi, app development Tenkasi, digital marketing agency Tenkasi, Vadakarai startup" />
 *
 * Consider adding LocalBusiness schema (JSON-LD) with your address, area served (Tenkasi, Tirunelveli, Courtallam, Sankarankovil), and phone number — this is what unlocks Google Maps / local pack visibility for "near me" searches.
 */

function Services() {
  return (
    <main className="bg-[#F8FAFD]">
      {/* Spacer for Floating Navbar */}
      <div className="h-24 sm:h-32 lg:h-36" />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
            SERVING TENKASI & TAMIL NADU
          </span>

          {/* Primary H1 — targets the two core local keywords in one clean phrase */}
          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0B1E3D] sm:mt-6 sm:text-4xl lg:text-5xl">
            Interior Design &amp; Web Design Services
            <span className="block text-[#2F6FED] sm:inline">
              {" "}
              in Tenkasi, Tamil Nadu.
            </span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            We're a young, Vadakarai-rooted team based in Tenkasi, helping
            homeowners and businesses across Tamil Nadu grow — from interior
            design and architecture for homes and offices, to websites,
            mobile apps, custom software and digital marketing that bring in
            real customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-label="Interior design and web design services in Tenkasi"
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                className="group rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED] transition group-hover:bg-[#2F6FED] group-hover:text-white sm:h-16 sm:w-16 sm:rounded-2xl">
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block" />
                </div>

                <h2 className="mt-3 text-sm font-semibold leading-snug text-[#0B1E3D] sm:mt-6 sm:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#52698A] sm:mt-4 sm:text-base sm:leading-7">
                  {service.description}
                </p>

                <button
                  type="button"
                  aria-label={`Get a quote for ${service.title} in Tenkasi`}
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#2F6FED] transition-all group-hover:gap-3 sm:mt-8 sm:gap-2 sm:text-base"
                >
                  Get a Free Quote
                  <ArrowRight size={14} className="sm:hidden" />
                  <ArrowRight size={18} className="hidden sm:block" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold leading-snug text-[#0B1E3D] sm:text-3xl lg:text-4xl">
              A Young Team From Vadakarai, Building for All of Tenkasi.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-8">
              Whether you're planning a modern home in Tenkasi, launching a
              new startup, or moving your business online, our local team
              combines interior design craft with modern web and app
              development — so you get one partner for both your physical
              space and your digital presence.
            </p>

            {/* Trust points — mobile-scannable and reinforces local-service keywords for SEO */}
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {[
                "Based in Tenkasi, Tamil Nadu",
                "Transparent, upfront pricing",
                "On-time project delivery",
                "Free consultation & site visit",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-xs text-[#123C82] sm:text-sm"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#2F6FED]" />
                  {point}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#2F6FED] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123C82] sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Book Your Free Consultation
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-[#F5F8FC] p-5 sm:rounded-3xl sm:p-8">
              <h3 className="text-3xl font-bold text-[#2F6FED] sm:text-5xl">
                12+
              </h3>
              <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                Projects Delivered
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF7ED] p-5 sm:rounded-3xl sm:p-8">
              <h3 className="text-3xl font-bold text-[#F59E0B] sm:text-5xl">
                20+
              </h3>
              <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                Happy Clients in Tamil Nadu
              </p>
            </div>

            <div className="rounded-2xl bg-[#EFF6FF] p-5 sm:rounded-3xl sm:p-8">
              <h3 className="text-3xl font-bold text-[#0EA5E9] sm:text-5xl">
                6+
              </h3>
              <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                Design & Tech Services
              </p>
            </div>

            <div className="rounded-2xl bg-[#ECFDF5] p-5 sm:rounded-3xl sm:p-8">
              <h3 className="text-3xl font-bold text-[#10B981] sm:text-5xl">
                24/7
              </h3>
              <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                Support, Anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[28px] bg-gradient-to-r from-[#2F6FED] to-[#123C82] px-6 py-14 text-center text-white sm:rounded-[40px] sm:px-10 sm:py-20">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Ready to Design Your Space or Build Your Website?
            </h2>

            <p className="mt-3 text-sm text-blue-100 sm:mt-5 sm:text-lg">
              Talk to our Tenkasi-based team today — free consultation, no
              obligation.
            </p>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#123C82] transition hover:scale-105 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;