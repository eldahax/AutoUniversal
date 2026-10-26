
import { ArrowUpRight } from "lucide-react";

export default function HomeHero(){
    return(
        <>
          <section className="relative mx-auto max-w-full px-5 pt-12 sm:px-10 sm:pt-16">
          <div className=" min-h-90vh overflow-hidden border border-white/[0.08] bg-[#10141d] sm:min-h-[690px]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90"
              alt="Premium sports car"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#10141d]/75 via-transparent to-[#111214]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111214]/50 via-transparent to-[#111214]/20" />

            <div className="relative z-10 flex min-h-[590px] flex-col items-center px-5 pt-20 text-center sm:min-h-[690px] sm:pt-24">
              <p className="text-[10px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs">
                AUTOUNIVERSAL · AUTOMOTIVE SOLUTIONS
              </p>

              <h1 className="mt-7 max-w-3xl text-4xl font-medium uppercase leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                YOUR DRIVE.
                <br />
                <span className="text-[#6595ff]">OUR PASSION.</span>
              </h1>

              <p className="mt-5 max-w-md text-xs leading-6 text-gray-300 sm:text-sm">
                Vehicle sales, imports, rentals and expert automotive care.
                Everything your car needs, in one place.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3968d9] px-6 py-3 text-[11px] font-medium transition hover:bg-[#4b7cff]"
              >
                Get in touch <ArrowUpRight size={14} />
              </a>

              <div className="absolute bottom-0 left-0 right-0 flex h-[250px] items-end justify-center sm:h-[320px]">
                <div className="h-12 w-3/4 rounded-[100%] bg-[#326eea]/20 blur-3xl" />
              </div>
            </div>
          </div>
        </section></>
    )
}