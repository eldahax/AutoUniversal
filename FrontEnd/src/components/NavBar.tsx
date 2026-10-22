
import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Cars for Sale", href: "/cars" },
  { label: "Rentals", href: "/rental" },
  { label: "Spare Parts", href: "/pieces" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 right-0 z-50 mx-3 mt-1 w-auto border border-white/20 backdrop-blur-md">      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-[#D6B879]">
            AU<span className="text-white">.</span>
          </span>
          <span className="border-l border-white/20 pl-3 text-sm font-semibold tracking-[0.16em] text-white">
            AUTO<span className="text-[#8ECFFF]">UNIVERSAL</span>
          </span> 
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        
      <div className="flex justify-between items-center max-w-[150px] gap-4">
          <Link
          to="/Login"
          className=" rounded-2xl  border-none hidden items-center gap-2 bg-[#D6B879] px-5 py-3 text-sm font-semibold text-[#080D16] transition hover:bg-white md:flex"
        >
          LogIn
        </Link>
         <Link
          to="/Contact"
          className=" border-none rounded-2xl hidden items-center bg-[#D6B879] px-5 py-3 text-sm font-semibold text-[#080D16] transition hover:bg-white md:flex"
        >
          Contact <ArrowUpRight size={15} />
        </Link>
      </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080D16] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-[#D6B879]"
            >
              Contact us ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
