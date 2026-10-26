
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";



const HomeServices = (
 ) => {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-32"
    >
      <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
                What we do
              </p>
              <h2 className="text-3xl font-medium uppercase tracking-tight sm:text-5xl">
                OUR SERVICES
              </h2>
            </div>
            <span className="hidden text-[10px] tracking-widest text-gray-500 sm:block">
              BUILT AROUND YOUR DRIVE
            </span>
          </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          number="01"
          title="VEHICLE IMPORT"
          image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85"
          description="Your next vehicle, sourced and brought to you."
          href="#contact"
        />

        <ServiceCard
          number="02"
          title="CAR SALES"
          image="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85"
          description="Find the right car for your next chapter."
          href="#vehicles"
        />

        <ServiceCard
          number="03"
          title="DIAGNOSTICS"
          image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=85"
          description="Understand the problem before it becomes bigger."
          href="#booking"
        />

        <ServiceCard
          number="04"
          title="MECHANICAL SERVICES"
          image="https://i.pinimg.com/736x/5b/a2/98/5ba29806efa783f603078244d8bdb64d.jpg"
          description="Maintenance and repairs for your vehicle."
          href="#booking"
        />

        <ServiceCard
          number="05"
          title="RENT A VEHICLE"
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
          description="The freedom to go wherever you need."
          href="#rentals"
        />

        <a
          href="#booking"
          className="flex min-h-[245px] flex-col justify-between bg-[#3968d9] p-5 transition hover:bg-[#4777ed]"
        >
          <div className="flex items-start justify-between">
            <h3 className="max-w-[200px] text-xs font-medium uppercase leading-5">
              REQUEST A SERVICE OR CONSULTATION
            </h3>
            <ArrowUpRight size={16} />
          </div>

          <div>
            <p className="max-w-[230px] text-[11px] leading-5 text-blue-100">
              Tell us what you need and we will help you find the right solution.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[10px] underline underline-offset-4">
              Contact us <ArrowRight size={12} />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HomeServices;
