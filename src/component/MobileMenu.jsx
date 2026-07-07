import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-[500px] py-5" : "max-h-0"
      }`}
    >
      <div className="flex flex-col gap-5 pl-5">
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* <button className="bg-lime-400 hover:bg-lime-300 transition py-3 rounded-full font-semibold">
          Get Connected →
        </button> */}
      </div>
    </div>
  );
};

export default MobileMenu;