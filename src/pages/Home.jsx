import React from "react";
import { ArrowRight, Crosshair, Menu, X } from "lucide-react";
import Footer from "../pages/Footer";
import CTAPage from "../pages/CTAPage";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Testimonials from "./Testimonials";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`;

const AUDIENCE = [
  "HOMEOWNERS",
  "STARTUPS",
  "RETAIL BRANDS",
  "RESTAURANTS",
  "REAL ESTATE TEAMS",
  "LOCAL BUSINESSES",
];

function RulerEdge() {
  const ticks = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-6 overflow-hidden opacity-50">
      <div className="flex h-full items-end">
        {ticks.map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 border-l border-[#2F6FED]"
            style={{ width: "3.2%", height: i % 5 === 0 ? "60%" : "30%" }}
          />
        ))}
      </div>
    </div>
  );
}

function BlueprintIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="h-full w-full"
      fill="none"
      stroke="#2F6FED"
      strokeWidth="1.5"
    >
      {/* dimension lines */}
      <line x1="20" y1="30" x2="220" y2="30" strokeDasharray="4 4" opacity="0.5" />
      <line x1="20" y1="24" x2="20" y2="36" opacity="0.5" />
      <line x1="220" y1="24" x2="220" y2="36" opacity="0.5" />
      <text x="100" y="20" fill="#2F6FED" fontSize="10" fontFamily="IBM Plex Mono" opacity="0.7">
        6.4m
      </text>

      {/* house elevation */}
      <polygon points="60,180 190,110 320,180" strokeWidth="2" />
      <rect x="80" y="180" width="220" height="150" strokeWidth="2" />
      <rect x="110" y="230" width="45" height="100" />
      <rect x="230" y="220" width="50" height="45" />
      <line x1="255" y1="220" x2="255" y2="265" opacity="0.6" />
      <line x1="230" y1="242" x2="280" y2="242" opacity="0.6" />
      <line x1="190" y1="110" x2="190" y2="90" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="190" cy="86" r="3" fill="#2F6FED" stroke="none" />

      {/* browser / wireframe window overlapping */}
      <g transform="translate(230,240)">
        <rect x="0" y="0" width="220" height="150" rx="6" fill="#F5F8FC" stroke="#2F6FED" strokeWidth="1.5" />
        <line x1="0" y1="26" x2="220" y2="26" opacity="0.6" />
        <circle cx="16" cy="13" r="3" opacity="0.6" />
        <circle cx="28" cy="13" r="3" opacity="0.6" />
        <circle cx="40" cy="13" r="3" opacity="0.6" />
        <rect x="16" y="42" width="90" height="8" opacity="0.5" />
        <rect x="16" y="58" width="140" height="6" opacity="0.35" />
        <rect x="16" y="70" width="120" height="6" opacity="0.35" />
        <rect x="16" y="92" width="60" height="20" rx="3" stroke="#123C82" opacity="0.8" />
        <rect x="130" y="88" width="70" height="50" opacity="0.3" />
      </g>

      {/* crosshair coordinate marker */}
      <g transform="translate(70,260)" stroke="#123C82">
        <line x1="-10" y1="0" x2="10" y2="0" />
        <line x1="0" y1="-10" x2="0" y2="10" />
        <circle cx="0" cy="0" r="14" strokeDasharray="2 3" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div
      className="min-h-screen w-full bg-white text-[#0B1E3D]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        ${FONT_IMPORT}
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 26s linear infinite; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        @keyframes float-tag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-tag { animation: float-tag 4s ease-in-out infinite; }
        @keyframes float-illustration {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-illustration { animation: float-illustration 6s ease-in-out infinite; }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-spin-slow, .animate-float-tag, .animate-float-illustration, .animate-pulse-ring { animation: none !important; }
        }
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2F6FED;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #2F6FED;
        }
        .glow-effect {
          box-shadow: 0 0 60px rgba(47, 111, 237, 0.08);
        }
        .cta-primary {
          background: linear-gradient(135deg, #2F6FED 0%, #1a4fc3 100%);
          box-shadow: 0 8px 32px rgba(47, 111, 237, 0.25);
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(47, 111, 237, 0.35);
        }
        .cta-secondary {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(47, 111, 237, 0.15);
        }
        .cta-secondary:hover {
          border-color: #2F6FED;
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(47, 111, 237, 0.12);
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
            line-height: 1.1 !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          .mobile-menu-overlay {
            background: rgba(11, 30, 61, 0.95);
            backdrop-filter: blur(20px);
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
      `}</style>

      {/* HERO */}
      {/* HERO */}
      <div className="relative overflow-hidden">
        <section className="relative flex min-h-[100svh] overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-28">
          {/* Premium Gradient Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-1/4 -top-1/4 h-[300px] w-[300px] rounded-full bg-[#2F6FED] opacity-[0.03] blur-3xl sm:h-[600px] sm:w-[600px]" />
            <div className="absolute -right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-[#123C82] opacity-[0.03] blur-3xl sm:h-[500px] sm:w-[500px]" />
            <div className="absolute left-1/2 top-1/3 hidden h-[400px] w-[400px] rounded-full bg-[#2F6FED] opacity-[0.02] blur-2xl sm:block" />
          </div>

          {/* Blueprint Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15 sm:opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(#BFD7F5 1px, transparent 1px), linear-gradient(90deg, #BFD7F5 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="hidden sm:block">
            <RulerEdge />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6">
            <div className="grid w-full items-center gap-8 md:gap-16 lg:grid-cols-2">
              {/* Left - Text Content */}
              <div className="pt-2 md:pt-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-[#F5F8FC] px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.15em] text-[#2F6FED] sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F6FED] animate-pulse" />
                  {/* Shorter label on mobile, full label from sm up */}
                  <span className="sm:hidden">DESIGN & DEV STUDIO</span>
                  <span className="hidden sm:inline">
              // CREATIVE DESIGN & DIGITAL SOLUTIONS //
                  </span>
                </div>

                <h1 className="hero-title  font-display mt-4 text-3xl font-bold leading-[1.1] text-[#0B1E3D] sm:mt-5 sm:text-5xl sm:leading-[1.05] lg:mt-6 lg:text-6xl xl:text-7xl">
                  Creative Designs.
                  <br />
                  Innovative
                  <br />
                  Technology.
                  <br />
                  <span className="relative inline-block">
                    Real Business Growth.
                    <svg
                      className="absolute -bottom-1 left-0 w-full sm:-bottom-2 lg:-bottom-3"
                      viewBox="0 0 300 14"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8 C60 2 120 10 180 5 S270 2 298 6"
                        stroke="#2F6FED"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.8"
                      />
                    </svg>
                  </span>
                </h1>
                {/* <h3 className="block lg:hidden md:hidden sm:hidden hero-title">Creative Designs, Innovative, Technology, Real Business Growth.</h3> */}

                {/* Shorter subtitle on mobile, full copy from sm up */}
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#52698A] sm:mt-5 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
                  <span className="sm:hidden">
                    Design and development for websites, apps, and brands that grow.
                  </span>
                  <span className="hidden sm:inline">
                    We help businesses and homeowners bring their ideas to life
                    through interior and exterior design, websites, mobile
                    applications, custom software, and digital marketing.
                  </span>
                </p>

                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-5">
                  <a
                    href="#contact"
                    className="cta-primary group relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
                  >
                    Start a Project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[18px]"
                    />
                  </a>

                  {/* x    */}
                  {/* <a
                    href="#work"
                    className="cta-secondary group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#123C82] transition-all duration-300 sm:px-8 sm:py-4 sm:text-base"
                  >
                    See our work
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[18px]"
                    />
                  </a> */}
                </div>

                {/* Trust Badge */}
                {/* <div className="mt-6 flex items-center gap-3 hidden lg:block sm:mt-10 sm:gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-7 w-7 rounded-full border-2 border-white bg-[#F5F8FC] flex items-center justify-center text-[10px] font-semibold text-[#2F6FED] sm:h-8 sm:w-8 sm:text-xs"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="h-3.5 w-3.5 text-[#F59E0B] sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[11px] font-medium text-[#52698A] sm:text-xs">
                      Trusted by 200+ brands
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Right - Illustration */}
              <div className="relative mt-6 flex justify-center lg:mt-0">
                {/* Decorative rings — only from sm up, keeps mobile clean */}
                <div className="animate-spin-slow absolute -right-4 top-0 hidden h-16 w-16 rounded-full border border-dashed border-[#2F6FED]/40 sm:block sm:h-20 sm:w-20" />
                <div className="animate-pulse-ring absolute -left-4 top-1/4 hidden h-12 w-12 rounded-full border border-[#2F6FED]/20 sm:block" />

                <div className="animate-float-illustration w-full max-w-[280px] sm:max-w-[480px] lg:max-w-[680px]">
                  <BlueprintIllustration />
                </div>

                {/* Coordinate tag — only from sm up */}
                <div className="animate-float-tag absolute left-2 top-2 hidden items-center gap-2 rounded-md border border-[#2F6FED]/30 bg-white/95 px-3 py-1.5 font-mono text-xs text-[#123C82] shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:flex sm:px-4 sm:py-2">
                  <Crosshair size={13} />
                  X:214&nbsp;&nbsp;Y:132
                </div>

                {/* Floating Badge — only from sm up */}
                <div className="absolute -bottom-4 -right-4 hidden rounded-lg border border-[#2F6FED]/20 bg-white/95 px-4 py-2 shadow-lg backdrop-blur sm:flex">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#2F6FED]/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#2F6FED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1E3D]">99.9%</p>
                      <p className="text-[10px] text-[#52698A]">Uptime Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Marquee */}
          <div className="absolute bottom-0 left-0 z-20 w-full border-t border-[#123C82]/10 bg-white/80 backdrop-blur-md">
            <div className="overflow-hidden py-2 sm:py-4">
              <div className="animate-marquee flex w-max whitespace-nowrap">
                {[...AUDIENCE, ...AUDIENCE].map((item, index) => (
                  <div
                    key={index}
                    className="mx-4 flex items-center gap-4 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#52698A] sm:mx-8 sm:gap-6 sm:text-xs sm:tracking-[0.3em]"
                  >
                    <span className="hover:text-[#2F6FED] transition-colors cursor-default">
                      {item}
                    </span>
                    <span className="text-[#2F6FED] opacity-50">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <CTAPage />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}