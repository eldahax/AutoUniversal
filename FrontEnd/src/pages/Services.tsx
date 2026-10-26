
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Check,
  Cog,
  ScanLine,
  Ship,
  Wrench,
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "VEHICLE IMPORT",
    subtitle: "Your next car, sourced for you.",
    description:
      "Looking for a specific vehicle? Tell us what you have in mind and discuss import options with our team.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    icon: Ship,
  },
  {
    number: "02",
    title: "CAR SALES",
    subtitle: "Find your next drive.",
    description:
      "Explore our available vehicles, compare your options and contact us for details about a car.",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    icon: CarFront,
  },
  {
    number: "03",
    title: "COMPUTER DIAGNOSTICS",
    subtitle: "Know what is going on.",
    description:
      "Identify vehicle faults and get a clearer understanding of potential issues before deciding on repairs.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
    icon: ScanLine,
  },
  {
    number: "04",
    title: "MECHANICAL REPAIRS",
    subtitle: "Keep your car performing.",
    description:
      "Get in touch about maintenance, mechanical issues and repair work for your vehicle.",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf5c6b9f7?auto=format&fit=crop&w=1200&q=85",
    icon: Wrench,
  },
  {
    number: "05",
    title: "AUTO-ELECTRICAL SERVICES",
    subtitle: "Electrical expertise.",
    description:
      "Discuss electrical faults, warning lights and other vehicle electrical problems with our team.",
    image:
      "https://images.unsplash.com/photo-1613214150384-9f4a9d4c5b2e?auto=format&fit=crop&w=1200&q=85",
    icon: Cog,
  },
  {
    number: "06",
    title: "VEHICLE RENTAL",
    subtitle: "Your journey, your choice.",
    description:
      "Ask about available rental vehicles, rental periods and pricing for your next trip.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    icon: CarFront,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111214] text-white">
      <Navbar />

      <main className="md:mt-13 sm:mt-7">
        <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-10 sm:pt-16">
          <div className="relative flex min-h-[390px] flex-col justify-center overflow-hidden border border-white/[0.08] bg-[#0d1420] px-7 py-16 sm:min-h-[470px] sm:px-14 lg:px-20">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=90"
              alt="Premium car"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/75 to-[#111214]/10" />
            <div className="relative max-w-2xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-blue-400">
                AUTOUNIVERSAL / WHAT WE DO
              </p>
              <h1 className="text-4xl font-medium uppercase leading-[1.08] tracking-tight sm:text-6xl">
                AUTOMOTIVE
                <br />
                <span className="text-[#6595ff]">WITHOUT LIMITS.</span>
              </h1>
              <p className="mt-6 max-w-lg text-xs leading-6 text-gray-300 sm:text-sm">
                From sourcing your next vehicle to maintaining the one you
                already own. Everything you need, in one place.
              </p>
              <a
                href="#all-services"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] transition hover:bg-[#4b7cff]"
              >
                Explore our services <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className=" mt-3 mx-auto grid max-w-[1500px] gap-8 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
              One destination
            </p>
            <h2 className="max-w-xl text-3xl font-medium uppercase leading-tight sm:text-5xl">
              DO MORE WITH YOUR AUTOMOTIVE PARTNER.
            </h2>
          </div>
          <p className="max-w-xl text-xs leading-7 text-gray-400 sm:text-sm">
            Buying, importing, renting or servicing a car should feel
            straightforward. Choose a service below to find out more or get in
            touch with our team.
          </p>
        </section>

        <section
          id="all-services"
          className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-32 mt-5"
        >
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
                What we offer
              </p>
              <h2 className="text-3xl font-medium uppercase sm:text-5xl">
                OUR SERVICES
              </h2>
            </div>
            <span className="hidden text-[10px] text-gray-500 sm:block">
              06 SERVICES / ONE TEAM
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-white/[0.08] bg-[#17191d] p-6"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111214]/65 via-[#111214]/25 to-[#111214]" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[10px] tracking-widest text-gray-300">
                      / {service.number}
                    </span>
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#6595ff]"
                    />
                  </div>

                  <div className="relative mt-20">
                    <h3 className="text-lg font-medium uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-blue-300">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 max-w-sm text-xs leading-6 text-gray-300">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[10px] text-white underline decoration-white/40 underline-offset-4 transition hover:text-blue-300"
                    >
                      Make an enquiry <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="  border-y border-white/[0.08] py-26 sm:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
                Why AutoUniversal
              </p>
              <h2 className="text-3xl font-medium uppercase leading-tight sm:text-5xl">
                YOUR NEEDS COME FIRST.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Multiple automotive services in one place",
                "Personal assistance with your enquiry",
                "Options for buying, renting and maintenance",
                "A straightforward way to get in touch",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border border-white/[0.08] bg-[#15171c] p-5"
                >
                  <Check size={16} className="shrink-0 text-blue-400" />
                  <p className="text-xs leading-5 text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-28"
        >
          <div className="flex flex-col justify-between gap-7 bg-[#3968d9] p-7 sm:p-12 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-100">
                Have something in mind?
              </p>
              <h2 className="max-w-2xl text-3xl font-medium uppercase leading-tight sm:text-4xl">
                LET'S FIND THE RIGHT SOLUTION.
              </h2>
              <p className="mt-4 max-w-lg text-xs leading-6 text-blue-100">
                Tell us what you need and our team can help you with the next
                step.
              </p>
            </div>
            <a
              href="mailto:info@autouniversal.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#111214] px-6 py-4 text-[11px] transition hover:bg-[#20242c]"
            >
              Contact our team <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
