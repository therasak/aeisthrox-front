import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    User,
    MessageSquare,
    Building2,
    CheckCircle2,
} from "lucide-react";

/**
 * SEO NOTES (add these in your page <head> / Helmet / Next metadata, not visible in the UI):
 *
 * <title>Contact Us | Aiesthrox — Interior Design & Web Design, Tenkasi</title>
 * <meta name="description" content="Get in touch with Aiesthrox, a Vadakarai-based creative team in Tenkasi, Tamil Nadu. Book a free consultation for interior design, web design, app development, or digital marketing." />
 *
 * Add LocalBusiness schema (JSON-LD) here with your real address, phone, and
 * geo coordinates — it pairs well with the map below for local search ("near me").
 *
 * IMPORTANT: Replace the placeholder address, phone, email, and map query
 * below with your real business details before publishing.
 */

const CONTACT_INFO = {
    address: "Vadakarai, Tenkasi, Tamil Nadu, India",
    phone: "+91 90000 00000",
    email: "hello@aiesthrox.com",
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
};

// Simple, no-API-key Google Maps embed. Swap the query text for your exact
// address, or replace with a full "Share > Embed a map" src from Google Maps
// once you have your business listed, for a more precise pin.
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT_INFO.address
)}&output=embed`;

const services = [
    "Interior Design",
    "Web Design & Development",
    "App Development",
    "Digital Marketing",
    "Custom Software",
    "Architecture",
];

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | submitting | success

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service: ${formData.service}

Message:
${formData.message}
`;

        window.open(
            `https://wa.me/919025360827?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <main className="bg-[#F8FAFD]">
            {/* Spacer for Floating Navbar */}
            <div className="h-24 sm:h-32 lg:h-36" />

            {/* Intro */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
                        GET IN TOUCH
                    </span>

                    <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0B1E3D] sm:mt-6 sm:text-4xl lg:text-5xl">
                        Let's Build Something
                        <span className="block text-[#2F6FED] sm:inline"> Great, Together.</span>
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                        Based in Vadakarai, Tenkasi — we'd love to hear about your project,
                        whether it's a home, a website, or an app.
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="bg-white mt-12 py-12 sm:mt-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED]" />
                            ABOUT US
                        </span>

                        <h2 className="mt-5 text-2xl font-bold leading-snug text-[#0B1E3D] sm:mt-6 sm:text-3xl lg:text-4xl">
                            A Young Creative Team, Rooted in Vadakarai.
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-6 sm:text-base sm:leading-8">
                            We're a group of local youngsters from Vadakarai, Tenkasi, who
                            came together to bring modern design and technology to our
                            hometown. What started as a shared interest in building things —
                            spaces, websites, apps — grew into a studio that now helps
                            homeowners and businesses across Tamil Nadu.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-[#52698A] sm:mt-4 sm:text-base sm:leading-8">
                            We believe good design shouldn't be limited to big cities. So we
                            bring the same care — honest pricing, clear communication, and
                            on-time delivery — to every home, shop, and startup we work
                            with, right here in Tenkasi.
                        </p>

                        <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                            {[
                                "Local team, local understanding",
                                "Design + technology under one roof",
                                "Transparent, upfront pricing",
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
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="rounded-2xl bg-[#F5F8FC] p-5 sm:rounded-3xl sm:p-8">
                            <h3 className="text-3xl font-bold text-[#2F6FED] sm:text-5xl">12+</h3>
                            <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                                Projects Delivered
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#FFF7ED] p-5 sm:rounded-3xl sm:p-8">
                            <h3 className="text-3xl font-bold text-[#F59E0B] sm:text-5xl">20+</h3>
                            <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                                Happy Clients
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#EFF6FF] p-5 sm:rounded-3xl sm:p-8">
                            <h3 className="text-3xl font-bold text-[#0EA5E9] sm:text-5xl">6+</h3>
                            <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                                Design & Tech Services
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#ECFDF5] p-5 sm:rounded-3xl sm:p-8">
                            <h3 className="text-3xl font-bold text-[#10B981] sm:text-5xl">100%</h3>
                            <p className="mt-2 text-xs text-[#52698A] sm:mt-3 sm:text-base">
                                Local, From Tenkasi
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form + Info + Map */}
            <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
                <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
                    {/* Form */}
                    <div className="lg:col-span-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
                        <h2 className="text-xl font-bold text-[#0B1E3D] sm:text-2xl">
                            Send Us a Message
                        </h2>
                        <p className="mt-2 text-sm text-[#52698A] sm:text-base">
                            Fill out the form and our team will get back to you within 24
                            hours.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-xs font-semibold text-[#123C82] sm:text-sm"
                                    >
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User
                                            size={16}
                                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52698A]"
                                        />
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-slate-200 bg-[#F8FAFD] py-3 pl-10 pr-4 text-sm text-[#0B1E3D] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-2 focus:ring-[#2F6FED]/20"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-1.5 block text-xs font-semibold text-[#123C82] sm:text-sm"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone
                                            size={16}
                                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52698A]"
                                        />
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 90000 00000"
                                            className="w-full rounded-xl border border-slate-200 bg-[#F8FAFD] py-3 pl-10 pr-4 text-sm text-[#0B1E3D] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-2 focus:ring-[#2F6FED]/20"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block text-xs font-semibold text-[#123C82] sm:text-sm"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52698A]"
                                    />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFD] py-3 pl-10 pr-4 text-sm text-[#0B1E3D] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-2 focus:ring-[#2F6FED]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="service"
                                    className="mb-1.5 block text-xs font-semibold text-[#123C82] sm:text-sm"
                                >
                                    Service You're Interested In
                                </label>
                                <div className="relative">
                                    <Building2
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52698A]"
                                    />
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFD] py-3 pl-10 pr-4 text-sm text-[#0B1E3D] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-2 focus:ring-[#2F6FED]/20"
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        {services.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block text-xs font-semibold text-[#123C82] sm:text-sm"
                                >
                                    Your Message
                                </label>
                                <div className="relative">
                                    <MessageSquare
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-3.5 text-[#52698A]"
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us a bit about your project..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFD] py-3 pl-10 pr-4 text-sm text-[#0B1E3D] outline-none transition focus:border-[#2F6FED] focus:bg-white focus:ring-2 focus:ring-[#2F6FED]/20"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2F6FED] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123C82] disabled:opacity-70 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                            {status === "success" && (
                                <p className="flex items-center gap-2 text-sm font-medium text-[#10B981]">
                                    <CheckCircle2 size={16} />
                                    Thanks! Your message has been sent — we'll be in touch soon.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Info + Map */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                            <h3 className="text-lg font-bold text-[#0B1E3D] sm:text-xl">
                                Contact Details
                            </h3>

                            <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                                <li className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED]">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#0B1E3D] sm:text-sm">
                                            Address
                                        </p>
                                        <p className="mt-0.5 text-xs text-[#52698A] sm:text-sm">
                                            {CONTACT_INFO.address}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED]">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#0B1E3D] sm:text-sm">
                                            Phone
                                        </p>
                                        <a
                                            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                                            className="mt-0.5 block text-xs text-[#52698A] hover:text-[#2F6FED] sm:text-sm"
                                        >
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED]">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#0B1E3D] sm:text-sm">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${CONTACT_INFO.email}`}
                                            className="mt-0.5 block text-xs text-[#52698A] hover:text-[#2F6FED] sm:text-sm"
                                        >
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED]">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#0B1E3D] sm:text-sm">
                                            Working Hours
                                        </p>
                                        <p className="mt-0.5 text-xs text-[#52698A] sm:text-sm">
                                            {CONTACT_INFO.hours}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map */}
                        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm sm:rounded-3xl">
                            <iframe
                                title="Our location on Google Maps"
                                src={MAP_EMBED_SRC}
                                width="100%"
                                height="320"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-[260px] w-full sm:h-[320px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;