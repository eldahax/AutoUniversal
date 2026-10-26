
import { ArrowRight, ArrowUpRight, } from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HomeHero from "../components/Hero";
import HomeServices from "../Reusable/HomeService";
import HomeCarCard from "../components/HomeCarCard";
import HomeBooking from "../components/HomeBooking";


export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111214] text-white">
      <Navbar />

      <main>
       <HomeHero></HomeHero>
       <HomeServices></HomeServices>
       <HomeCarCard></HomeCarCard>
       <HomeBooking></HomeBooking>
    
        <section id="rentals" className="mx-auto grid max-w-[1500px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
              Flexible driving
            </p>
            <h2 className="text-3xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
              THE ROAD IS YOURS TO TAKE.
            </h2>
            <p className="mt-5 max-w-md text-xs leading-7 text-gray-400 sm:text-sm">
              Whether it is a weekend away or everyday transport, find a rental
              option that suits your plans.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] hover:bg-[#4b7cff]">
              Ask about rentals <ArrowRight size={14} />
            </a>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85"
              alt="Premium vehicle"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/50 to-transparent" />
          </div>
        </section>

        <section id="parts" className="mx-auto max-w-[1500px] px-5 py-20 sm:px-10 sm:py-24">
          <div className="flex flex-col justify-between gap-6 border border-white/[0.08] bg-[#15171c] p-7 sm:p-10 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">Parts & accessories</p>
              <h2 className="text-2xl font-medium uppercase sm:text-3xl">LOOKING FOR A SPECIFIC PART?</h2>
              <p className="mt-3 max-w-lg text-xs leading-6 text-gray-400">
                Share your vehicle details and the part you need.
              </p>
            </div>
            <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] hover:bg-[#4b7cff]">
              Ask about parts <ArrowRight size={14} />
            </a>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(43,91,200,0.22),transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-blue-400">
              AutoUniversal
            </p>
            <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight sm:text-6xl">
              STAND OUT.
              <br />
              <span className="text-[#6595ff]">DRIVE YOUR WAY.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-gray-400 sm:text-sm">
              Whatever your next automotive move looks like, let's make it happen.
            </p>
            <a href="mailto:info@autouniversal.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3968d9] px-6 py-3 text-[11px] hover:bg-[#4b7cff]">
              Contact AutoUniversal <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
