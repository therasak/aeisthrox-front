import React from "react";
import { Mail } from "lucide-react";
import man1 from "../assets/man1.jpg";
import man2 from '../assets/man2.png';

// Move this to ../data/team.js later, same pattern as your services data
// NOTE: swap these `image` values for your transparent PNG cutouts
// (head-to-hip crop, transparent background) — e.g. `import aravind from "../assets/team/aravind.png"`
const team = [
    {
        name: "Abubakkar",
        role: "Founder & CEO",
        image: man1,
        quote: "Good design solves problems people didn't know they had.",
        socials: { instagram: "https://www.instagram.com/view_of_abu?igsh=enpsaXBteGlmZGt0&utm_source=qr", twitter: "#", mail: "mailto:hello@example.com" },
    },
    {
        name: "Aarif",
        role: "Co-Founder & CTO",
        image: man2,
        quote: "A space should feel like it was always meant to be this way.",
        socials: { instagram: "https://www.instagram.com/aarif_fitness2026?igsh=MW45dHVvZ29oOXB2Nw==", twitter: "#", mail: "mailto:hello@example.com" },
    },
    // {
    //     name: "Rohan Das",
    //     role: "Full-Stack Engineer",
    //     image: man1,
    //     quote: "Ship it clean, ship it fast, ship it once.",
    //     socials: { linkedin: "#", twitter: "#", mail: "mailto:hello@example.com" },
    // },
];

function Team() {
    return (
        <main className="bg-[#F8FAFD]">
            {/* Spacer for Floating Navbar */}
            <div className="h-24 sm:h-32 lg:h-36" />

            {/* Intro */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
                        OUR TEAM
                    </span>

                    <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0B1E3D] sm:mt-6 sm:text-4xl lg:text-5xl">
                        A Small Team.
                        <span className="block text-[#2F6FED] sm:inline"> A Big Vision.</span>
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                        We're a startup from Tenkasi, one of Tamil Nadu's fast-growing
                        towns — proof that great design and technology don't need to come
                        from a big city. Just a small team that cares, working hard to
                        build something bigger than where we started.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section
                className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
                aria-label="Team members"
            >
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 lg:gap-10">
                    {team.map((member, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col items-center pt-2"
                        >
                            {/* Backdrop + cutout image */}
                            <div className="relative w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#EAF1FC] via-[#F3F7FD] to-white pt-8 sm:rounded-[2.5rem]">
                                {/* decorative accents */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#2F6FED]/10 blur-2xl" />
                                <div className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-[#123C82]/10 blur-2xl" />
                                <span className="absolute left-5 top-5 rounded-full bg-white/70 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] backdrop-blur-sm sm:left-6 sm:top-6">
                                    0{index + 1}
                                </span>

                                {/* PNG cutout — head to hip, transparent background */}
                                <img
                                    src={member.image}
                                    alt={`${member.name}, ${member.role}`}
                                    loading="lazy"
                                    className="relative z-10 mx-auto h-[300px] w-auto object-contain object-bottom grayscale-0 drop-shadow-[0_25px_25px_rgba(11,30,61,0.18)] transition-all duration-500 ease-out group-hover:-translate-y-1.5 sm:h-[340px] lg:grayscale lg:group-hover:grayscale-0"
                                />
                            </div>

                            {/* Info card, floats up over the image */}
                            <div className="relative z-20 -mt-8 w-[90%] rounded-2xl bg-white p-5 text-center shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 sm:-mt-9 sm:w-[88%] sm:rounded-3xl sm:p-6">
                                <h2 className="text-base font-bold text-[#0B1E3D] sm:text-lg">
                                    {member.name}
                                </h2>
                                <p className="text-xs font-medium text-[#2F6FED] sm:text-sm">
                                    {member.role}
                                </p>

                                <p className="mt-3 text-sm italic leading-6 text-[#52698A] sm:text-base">
                                    "{member.quote}"
                                </p>

                                <div className="mt-4 flex items-center justify-center gap-3 border-t border-slate-100 pt-4">
                                    <a href={member.socials.instagram}
                                        aria-label={`${member.name} on Instagram`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F8FC] text-[#2F6FED] transition hover:bg-[#2F6FED] hover:text-white"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="15"
                                            height="15"
                                            fill="currentColor"
                                        >
                                            <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.9 1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                                        </svg>
                                    </a>

                                    {/* <a href={member.socials.twitter}
                                        aria-label={`${member.name} on Twitter`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F8FC] text-[#2F6FED] transition hover:bg-[#2F6FED] hover:text-white"
                                    >
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                                            <path d="M18.9 2H22l-7.6 8.7L23.5 22H16.7l-5.3-6.9L5.3 22H2.2l8.1-9.3L1.5 2h6.9l4.8 6.3L18.9 2Zm-1.2 18.1h1.7L7.4 3.8H5.6l12.1 16.3Z" />
                                        </svg>
                                    </a> */}

                                    <a href={member.socials.mail}
                                        aria-label={`Email ${member.name}`}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F8FC] text-[#2F6FED] transition hover:bg-[#2F6FED] hover:text-white"
                                    >
                                        <Mail size={15} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Origin Story */}
            <section className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center sm:px-6">
                    <h2 className="text-2xl font-bold leading-snug text-[#0B1E3D] sm:text-3xl lg:text-4xl">
                        Built in Tenkasi. Made for Everyone.
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-8">
                        Tenkasi isn't a tech hub — yet. We started this studio here anyway,
                        because we believe good ideas don't need a big-city address to
                        grow. What started as three people working out of a small office
                        is now a team building websites, apps, and brands for clients
                        across Tamil Nadu and beyond. We're proud of where we're from, and
                        even more excited about where we're headed.
                    </p>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="rounded-[28px] bg-gradient-to-r from-[#2F6FED] to-[#123C82] px-6 py-14 text-center text-white sm:rounded-[40px] sm:px-10 sm:py-20">
                        <h2 className="text-2xl font-bold sm:text-4xl">
                            Want to Work With Us?
                        </h2>

                        <p className="mt-3 text-sm text-blue-100 sm:mt-5 sm:text-lg">
                            We're always open to talking about new projects and, sometimes,
                            new teammates.
                        </p>

                        <button
                            type="button"
                            className="mt-8 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#123C82] transition hover:scale-105 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section> */}
        </main>
    );
}

export default Team;