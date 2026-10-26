import { ArrowRight,ArrowUpRight } from "lucide-react";
const vehicles = [
  {
    name: "BMW 5 Series",
    detail: "Premium · Automatic",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mercedes-Benz",
    detail: "Luxury · Automatic",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Audi Sport",
    detail: "Performance · Automatic",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
  },
];


export default function HomeCarCard(){

    return(
        <>
            <section id="vehicles" className="border-y border-white/[0.07] bg-[#0d0f13] py-24 sm:py-32">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
                  Find your next car
                </p>
                <h2 className="text-3xl font-medium uppercase tracking-tight sm:text-5xl">
                  SELECTED VEHICLES
                </h2>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs text-blue-300 hover:text-white">
                Ask about availability <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {vehicles.map((vehicle) => (
                <article key={vehicle.name} className="group">
                  <div className="overflow-hidden bg-[#181a20]">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 py-5">
                    <div>
                      <h3 className="text-sm font-medium">{vehicle.name}</h3>
                      <p className="mt-2 text-[10px] text-gray-500">{vehicle.detail}</p>
                    </div>
                    <ArrowUpRight size={17} className="text-blue-400" />
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-[10px] text-gray-600">
              Sample vehicles shown for layout purposes. Replace with your actual inventory.
            </p>
          </div>
        </section>

        </>
    )
}