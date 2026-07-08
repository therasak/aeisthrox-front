import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-1 lg:top-5 left-0 right-0 z-[9999] px-1 md:px-8">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl lg:rounded-full border border-white/40 lg:shadow-2xl">

        <div className="flex justify-between items-center px-8 py-3 lg:px-10 lg:py-4">

          <Logo />

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA */}

          <div className="hidden lg:block">
            <button className="bg-lime-400 hover:bg-lime-300 transition px-7 py-4 rounded-full font-semibold flex items-center gap-2"
              onClick={() => window.open(
                `https://wa.me/918220676875?text=${encodeURIComponent("Hi Aeisthrox Team, I would like to get in touch with you regarding a project.")}`,
                "_blank"
              )}
            >
              Get Connected
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <MobileMenu open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Navbar;