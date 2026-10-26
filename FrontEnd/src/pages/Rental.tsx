
import { useMemo, useState } from "react";
import {
  ArrowDownUp,
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../Reusable/Hero";

type RentalVehicle = {
  id: number;
  make: string;
  model: string;
  year: number;
  dailyPrice: number;
  seats: number;
  fuel: "Diesel" | "Petrol" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  category: "Sedan" | "SUV" | "Coupe";
  image: string;
  featured?: boolean;
};

const vehicles: RentalVehicle[] = [
  {
    id: 1,
    make: "BMW",
    model: "530d M Sport",
    year: 2021,
    dailyPrice: 65,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    category: "Sedan",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    dailyPrice: 75,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    make: "Audi",
    model: "A6 S Line",
    year: 2021,
    dailyPrice: 60,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    make: "Porsche",
    model: "911 Carrera",
    year: 2020,
    dailyPrice: 180,
    seats: 2,
    fuel: "Petrol",
    transmission: "Automatic",
    category: "Coupe",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    make: "BMW",
    model: "X5",
    year: 2022,
    dailyPrice: 110,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    make: "Audi",
    model: "e-tron",
    year: 2022,
    dailyPrice: 95,
    seats: 5,
    fuel: "Electric",
    transmission: "Automatic",
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Rental() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState("250");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    const result = vehicles.filter((vehicle) => {
      const matchesSearch = `${vehicle.make} ${vehicle.model} ${vehicle.year}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        matchesSearch &&
        (category === "All" || vehicle.category === category) &&
        (fuel === "All" || vehicle.fuel === fuel) &&
        (transmission === "All" || vehicle.transmission === transmission) &&
        vehicle.dailyPrice <= Number(maxPrice)
      );
    });

    if (sort === "price-low") result.sort((a, b) => a.dailyPrice - b.dailyPrice);
    if (sort === "price-high") result.sort((a, b) => b.dailyPrice - a.dailyPrice);
    if (sort === "newest") result.sort((a, b) => b.year - a.year);
    if (sort === "seats") result.sort((a, b) => b.seats - a.seats);
    if (sort === "featured") {
      result.sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
      );
    }

    return result;
  }, [search, category, fuel, transmission, maxPrice, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setFuel("All");
    setTransmission("All");
    setMaxPrice("250");
    setSort("featured");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#111214] text-white">
      <Navbar />

      <main className="mt-15">
    <Hero url="https://i.pinimg.com/1200x/7f/97/f2/7f97f21672738ce04dca8f9c82a1a25a.jpg" pText="Explore our vehicle collection and discover a car that fits your style, your needs and your budget."
  btn="Browse rentalcars"/>

        <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-10 sm:py-20">
          <div className="grid grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
            {[
              ["01", "Browse rental cars"],
              ["02", "Compare rentals"],
              ["03", "Check availability"],
              ["04", "Book your ride"],
            ].map(([number, label]) => (
              <div key={number} className="bg-[#15171c] p-5 sm:p-6">
                <p className="text-[10px] text-blue-400">/ {number}</p>
                <p className="mt-4 text-[11px] uppercase tracking-wide text-gray-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="inventory" className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-32">
          <div className="mb-9">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
              Our rental fleet
            </p>
            <h2 className="text-3xl font-medium uppercase sm:text-5xl">
              CARS FOR RENT
            </h2>
            <p className="mt-4 max-w-xl text-xs leading-6 text-gray-400 sm:text-sm">
              Search the collection and narrow down the options to find your
              next car.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-[#15171c] p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="flex min-w-0 flex-1 items-center gap-3 border border-white/10 bg-[#101114] px-4">
                <Search size={16} className="shrink-0 text-blue-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search make, model or year..."
                  className="min-w-0 flex-1 bg-transparent py-3 text-xs outline-none placeholder:text-gray-600"
                />
              </label>

              <button
                type="button"
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="inline-flex items-center justify-center gap-2 border border-white/10 px-4 py-3 text-xs transition hover:border-blue-500 lg:hidden"
              >
                <SlidersHorizontal size={15} />
                {filtersOpen ? "Hide filters" : "Filters"}
              </button>

              <label className="flex items-center gap-3 border border-white/10 bg-[#101114] px-4">
                <ArrowDownUp size={15} className="shrink-0 text-blue-400" />
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="w-full bg-transparent py-3 text-xs text-gray-300 outline-none"
                >
                  <option value="featured">Featured first</option>
                  <option value="price-low">Daily rate: low to high</option>
                  <option value="price-high">Daily rate: high to low</option>
                  <option value="newest">Newest year</option>
                  <option value="seats">Most seats</option>
                </select>
              </label>
            </div>

            <div className={`${filtersOpen ? "grid" : "hidden"} mt-4 grid-cols-1 gap-3 border-t border-white/[0.08] pt-4 sm:grid-cols-2 lg:grid lg:grid-cols-4`}>
              <label className="text-[10px] uppercase tracking-wider text-gray-500">
                Vehicle type
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500"
                >
                  <option value="All">All vehicle types</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupe">Coupe</option>
                </select>
              </label>

              <label className="text-[10px] uppercase tracking-wider text-gray-500">
                Fuel type
                <select
                  value={fuel}
                  onChange={(event) => setFuel(event.target.value)}
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500"
                >
                  <option value="All">All fuel types</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
              </label>

              <label className="text-[10px] uppercase tracking-wider text-gray-500">
                Transmission
                <select
                  value={transmission}
                  onChange={(event) => setTransmission(event.target.value)}
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500"
                >
                  <option value="All">All transmissions</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </label>

              <label className="text-[10px] uppercase tracking-wider text-gray-500">
                Maximum daily price
                <select
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500"
                >
                  <option value="25">Up to €25 / day</option>
                  <option value="50">Up to €50 / day</option>
                  <option value="75">Up to €75 / day</option>
                  <option value="150">Up to €150 / day</option>
                  <option value="250">Any daily price</option>
                </select>
              </label>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
              <p className="text-[11px] text-gray-400">
                <span className="font-medium text-white">
                  {filteredVehicles.length}
                </span>{" "}
                rental cars found
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[10px] text-blue-300 underline underline-offset-4 hover:text-white"
              >
                Reset filters
              </button>
            </div>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="group overflow-hidden border border-white/[0.08] bg-[#15171c] transition hover:border-blue-500/50"
                >
                  <div className="relative overflow-hidden bg-[#202229]">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    {vehicle.featured && (
                      <span className="absolute left-4 top-4 bg-[#3968d9] px-3 py-2 text-[9px] tracking-[0.15em]">
                        FEATURED
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-[#111214]/90 px-3 py-2 text-xs font-medium">
                      {formatPrice(vehicle.dailyPrice)} / day
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-widest text-blue-400">
                      {vehicle.year} / {vehicle.category}
                    </p>
                    <h3 className="mt-3 text-lg font-medium">
                      {vehicle.make} {vehicle.model}
                    </h3>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-y border-white/[0.08] py-4">
                      <div>
                        <p className="text-[9px] uppercase text-gray-500">Fuel</p>
                        <p className="mt-1 text-[11px] text-gray-300">{vehicle.fuel}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase text-gray-500">Gearbox</p>
                        <p className="mt-1 text-[11px] text-gray-300">{vehicle.transmission}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase text-gray-500">Seats</p>
                        <p className="mt-1 text-[11px] text-gray-300">
                          {vehicle.seats} passengers
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase text-gray-500">Daily rate</p>
                        <p className="mt-1 text-[11px] text-gray-300">
                          {formatPrice(vehicle.dailyPrice)} / day
                        </p>
                      </div>
                    </div>

                    <a
                      href={`mailto:info@autouniversal.com?subject=${encodeURIComponent(`Rental enquiry: ${vehicle.make} ${vehicle.model}`)}`}
                      className="mt-5 flex items-center justify-between bg-[#3968d9] px-4 py-3 text-[10px] transition hover:bg-[#4b7cff]"
                    >
                      Rent this car <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-white/[0.08] bg-[#15171c] px-6 py-16 text-center">
              <CarFront size={30} className="mx-auto text-blue-400" />
              <h3 className="mt-5 text-sm font-medium uppercase">
                No rental cars found
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Try changing your search or filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-full bg-[#3968d9] px-5 py-3 text-[10px] hover:bg-[#4b7cff]"
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-6 text-[10px] leading-5 text-gray-600">
            Demo inventory only. Replace the sample cars, specifications and
            prices with verified vehicles before making the page public.
          </p>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-28">
          <div className="flex flex-col justify-between gap-7 bg-[#3968d9] p-7 sm:p-12 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-100">
                Need help with your rental?
              </p>
              <h2 className="max-w-2xl text-3xl font-medium uppercase sm:text-4xl">
                LET'S FIND YOUR NEXT RIDE.
              </h2>
              <p className="mt-4 max-w-lg text-xs leading-6 text-blue-100">
                Get in touch with our team about a vehicle or ask about
                importing a model that is not listed.
              </p>
            </div>
            <a
              href="mailto:info@autouniversal.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#111214] px-6 py-4 text-[11px] transition hover:bg-[#20242c]"
            >
              Contact us <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
