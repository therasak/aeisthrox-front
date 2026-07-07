import {
  MapPin,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";

/**
 * SEO NOTES (add in <head> / Helmet / Next metadata — not visible in the UI):
 *
 * <title>About Us | [Your Brand Name] – Interior Design & Web Design Studio, Tenkasi</title>
 * <meta name="description" content="[Your Brand Name] is a young design and technology studio from Vadakarai, Tenkasi. We build homes people love and websites that bring in customers, serving clients across Tenkasi, Tirunelveli and Tamil Nadu. Meet the team behind the work." />
 * <meta name="keywords" content="about [Your Brand Name], interior design studio Tenkasi, web design agency Tenkasi, young startup Vadakarai, Tenkasi design company" />
 *
 * Consider AboutPage or Organization JSON-LD schema with foundingLocation: Tenkasi,
 * Tamil Nadu, and a foundingDate — this helps Google connect your About page to
 * your Google Business Profile and strengthens local trust signals.
 */

const values = [
  {
    icon: Target,
    title: "Local First",
    description:
      "We're based in Tenkasi and understand the homes, businesses, and buyers of this region — not a generic template pulled from a big city playbook.",
  },
  {
    icon: Sparkles,
    title: "Design + Technology Together",
    description:
      "Most studios do one or the other. We plan your interiors and build your website under one roof, so both tell the same story.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Pricing",
    description:
      "No hidden costs, no inflated quotes. You see exactly what you're paying for before work begins.",
  },
  {
    icon: Clock,
    title: "We Show Up On Time",
    description:
      "Timelines are commitments, not estimates. We plan realistically and deliver what we promise.",
  },
];

const stats = [
  { value: "2022", label: "Founded in Tenkasi" },
  { value: "120+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Across Tamil Nadu" },
  { value: "6+", label: "Services Offered" },
];

function About() {
  return (
    <main className="bg-[#F8FAFD]">
      {/* Spacer for Floating Navbar */}
      <div className="h-24 sm:h-32 lg:h-36" />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
            ABOUT US
          </span>

          {/* Primary H1 — local + brand-intent keyword */}
          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0B1E3D] sm:mt-6 sm:text-4xl lg:text-5xl">
            A Young Design &amp; Tech Studio
            <span className="block text-[#2F6FED] sm:inline">
              {" "}
              Born in Vadakarai, Tenkasi.
            </span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            We're a small team of young designers and developers from
            Vadakarai who started with one belief — that businesses and
            homeowners in Tenkasi deserve the same quality of interior design
            and digital work you'd expect from a big city studio, without
            leaving home to get it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white mt-12 py-16 sm:mt-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2F6FED]/10 px-4 py-1.5 text-xs font-semibold text-[#2F6FED]">
              <MapPin size={14} />
              Tenkasi, Tamil Nadu
            </span>

            <h2 className="mt-5 text-2xl font-bold leading-snug text-[#0B1E3D] sm:mt-6 sm:text-3xl lg:text-4xl">
              Our Story
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-8">
              It started with a simple observation: people in and around
              Tenkasi were travelling to Madurai, Chennai, or Coimbatore for
              good interior design and web development work. We saw an
              opportunity to bring that same level of craft closer to home —
              built by people who understand the local climate, materials,
              language, and businesses.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-4 sm:text-base sm:leading-8">
              Today, we help homeowners plan interiors that fit how they
              actually live, and we help local businesses get online with
              websites, apps, and digital marketing that bring in real
              customers — not just a portfolio piece.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[#F5F8FC] p-5 sm:rounded-3xl sm:p-8"
              >
                <h3 className="text-3xl font-bold text-[#2F6FED] sm:text-5xl">
                  {stat.value}
                </h3>
                <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        aria-label="What we stand for"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0B1E3D] sm:text-3xl lg:text-4xl">
            What We Stand For
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#52698A] sm:mt-4 sm:text-base">
            The principles that guide every project, big or small.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F6FED]/10 text-[#2F6FED] sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon size={22} className="sm:hidden" />
                  <Icon size={26} className="hidden sm:block" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#0B1E3D] sm:mt-5 sm:text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#52698A]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team callout */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2F6FED]/10 px-4 py-1.5 text-xs font-semibold text-[#2F6FED]">
            <Users size={14} />
            The Team
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#0B1E3D] sm:mt-6 sm:text-3xl lg:text-4xl">
            Young, Local, and Invested in Getting It Right.
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-5 sm:text-base sm:leading-7 max-w-2xl mx-auto">
            Every project we take on carries our name in a town where word of
            mouth matters. That's why we treat every home, every website,
            every client relationship like it's the one our reputation is
            built on — because it is.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[28px] bg-gradient-to-r from-[#2F6FED] to-[#123C82] px-6 py-14 text-center text-white sm:rounded-[40px] sm:px-10 sm:py-20">
            <h2 className="text-2xl font-bold sm:text-4xl">
              Let's Build Something Together.
            </h2>

            <p className="mt-3 text-sm text-blue-100 sm:mt-5 sm:text-lg">
              Based in Tenkasi, working across Tamil Nadu.
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

export default About;