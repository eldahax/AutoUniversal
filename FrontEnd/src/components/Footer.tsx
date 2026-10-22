import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B12] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tight text-[#D6B879]">
            AU<span className="text-white">.</span>
            <span className="ml-2 text-sm tracking-[0.16em] text-white">
              AUTO UNIVERSAL
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            One trusted destination for vehicle sales, imports, rentals,
            maintenance, diagnostics and automotive parts.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <Link className="hover:text-white" to="/services">Our services</Link>
            <Link className="hover:text-white" to="/cars">Cars for sale</Link>
            <Link className="hover:text-white" to="/rental">Car rentals</Link>
            <Link className="hover:text-white" to="/pieces">Spare parts</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
            <a
              href="https://www.google.com/maps/search/?api=1&query=M838%2BVH%2C+Pej%C3%AB+30000"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 hover:text-white"
            >
              <MapPin size={17} className="mt-0.5 shrink-0 text-[#8ECFFF]" />
              M838+VH, Pejë 30000
            </a>

            <a href="tel:+38348224875" className="flex items-center gap-3 hover:text-white">
              <Phone size={17} className="text-[#8ECFFF]" />
              +383 048 224 875
            </a>

            <a
              href="mailto:mithathaxh@autouniversal.com"
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail size={17} className="text-[#8ECFFF]" />
              mithathaxh@autoUni.com
            </a>

            <Link to="/contact" className="mt-2 inline-flex items-center gap-2 text-[#D6B879] hover:text-white">
              Contact us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} AutoUniversal. All rights reserved.</p>
          <p>Built around your journey.</p>
        </div>
      </div>
    </footer>
  );
}