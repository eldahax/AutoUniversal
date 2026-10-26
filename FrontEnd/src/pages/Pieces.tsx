import { useMemo, useState } from "react";
import {
  ArrowDownUp,
  ArrowRight,
  ArrowUpRight,
  PackageSearch,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

type SparePart = {
  id: number;
  name: string;
  brand: string;
  partNumber: string;
  category: "Brakes" | "Engine" | "Filters" | "Lighting" | "Suspension" | "Accessories";
  price: number;
  condition: "New" | "Used";
  compatibility: string;
  image: string;
  featured?: boolean;
};

const spareParts: SparePart[] = [
  {
    id: 1,
    name: "Front Brake Disc Set",
    brand: "Brembo",
    partNumber: "BRM-BD-1042",
    category: "Brakes",
    price: 145,
    condition: "New",
    compatibility: "BMW 3 Series / 5 Series",
    featured: true,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    name: "Engine Oil Filter",
    brand: "MANN-FILTER",
    partNumber: "MN-OF-2201",
    category: "Filters",
    price: 18,
    condition: "New",
    compatibility: "BMW, Audi, Volkswagen",
    image: "https://images.unsplash.com/photo-1635784063381-4e4b8b8c6d76?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "LED Headlight Assembly",
    brand: "HELLA",
    partNumber: "HL-LH-3810",
    category: "Lighting",
    price: 230,
    condition: "New",
    compatibility: "Mercedes-Benz C-Class",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    name: "Turbocharger Assembly",
    brand: "Garrett",
    partNumber: "GRT-TB-5720",
    category: "Engine",
    price: 680,
    condition: "Used",
    compatibility: "Volkswagen / Audi 2.0 TDI",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    name: "Front Suspension Kit",
    brand: "KYB",
    partNumber: "KYB-SK-9025",
    category: "Suspension",
    price: 195,
    condition: "New",
    compatibility: "Audi A4 / A6",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    name: "All-Weather Floor Mats",
    brand: "WeatherTech",
    partNumber: "WT-FM-4100",
    category: "Accessories",
    price: 75,
    condition: "New",
    compatibility: "Universal fit — trim dependent",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Pieces() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [condition, setCondition] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredParts = useMemo(() => {
    const result = spareParts.filter((part) => {
      const searchable = `${part.name} ${part.brand} ${part.partNumber} ${part.compatibility}`;
      return (
        searchable.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || part.category === category) &&
        (brand === "All" || part.brand === brand) &&
        (condition === "All" || part.condition === condition) &&
        part.price <= Number(maxPrice)
      );
    });

    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") {
      result.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
    return result;
  }, [search, category, brand, condition, maxPrice, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setCondition("All");
    setMaxPrice("1000");
    setSort("featured");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#111214] text-white">
      <Navbar />
      <main className="mt-15">
        <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-10 sm:pt-16">
          <div className="relative flex min-h-[390px] flex-col justify-center overflow-hidden border border-white/[0.08] bg-[#0d1420] px-7 py-16 sm:min-h-[470px] sm:px-14 lg:px-20">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=90"
              alt="Automotive parts and repair workshop"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/75 to-transparent" />
            <div className="relative max-w-2xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-blue-400">
                AUTOUNIVERSAL / SPARE PARTS
              </p>
              <h1 className="text-4xl font-medium uppercase leading-[1.08] tracking-tight sm:text-6xl">
                THE RIGHT PART.
                <br />
                <span className="text-[#6595ff]">THE RIGHT FIT.</span>
              </h1>
              <p className="mt-6 max-w-lg text-xs leading-6 text-gray-300 sm:text-sm">
                Find quality parts for your vehicle, compare options, and search by part name, brand, or part number.
              </p>
              <a href="#inventory" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] transition hover:bg-[#4b7cff]">
                Browse spare parts <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-10 sm:py-20">
          <div className="grid grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
            {[["01", "Browse parts"], ["02", "Compare options"], ["03", "Check compatibility"], ["04", "Enquire or order"]].map(([number, label]) => (
              <div key={number} className="bg-[#15171c] p-5 sm:p-6">
                <p className="text-[10px] text-blue-400">/ {number}</p>
                <p className="mt-4 text-[11px] uppercase tracking-wide text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="inventory" className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-32">
          <div className="mb-9">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">Parts catalogue</p>
            <h2 className="text-3xl font-medium uppercase sm:text-5xl">SHOP SPARE PARTS</h2>
            <p className="mt-4 max-w-xl text-xs leading-6 text-gray-400 sm:text-sm">
              Search by part name, manufacturer, part number, or compatible vehicle to find what you need.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-[#15171c] p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="flex min-w-0 flex-1 items-center gap-3 border border-white/10 bg-[#101114] px-4">
                <Search size={16} className="shrink-0 text-blue-400" />
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search part, brand, part number, or vehicle..." className="min-w-0 flex-1 bg-transparent py-3 text-xs outline-none placeholder:text-gray-600" />
              </label>
              <button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className="inline-flex items-center justify-center gap-2 border border-white/10 px-4 py-3 text-xs transition hover:border-blue-500 lg:hidden">
                <SlidersHorizontal size={15} /> {filtersOpen ? "Hide filters" : "Filters"}
              </button>
              <label className="flex items-center gap-3 border border-white/10 bg-[#101114] px-4">
                <ArrowDownUp size={15} className="shrink-0 text-blue-400" />
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent py-3 text-xs text-gray-300 outline-none">
                  <option value="featured">Featured first</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </label>
            </div>

            <div className={`${filtersOpen ? "grid" : "hidden"} mt-4 grid-cols-1 gap-3 border-t border-white/[0.08] pt-4 sm:grid-cols-2 lg:grid lg:grid-cols-4`}>
              <label className="text-[10px] uppercase tracking-wider text-gray-500">Category
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500">
                  <option value="All">All categories</option><option value="Brakes">Brakes</option><option value="Engine">Engine</option><option value="Filters">Filters</option><option value="Lighting">Lighting</option><option value="Suspension">Suspension</option><option value="Accessories">Accessories</option>
                </select>
              </label>
              <label className="text-[10px] uppercase tracking-wider text-gray-500">Brand
                <select value={brand} onChange={(event) => setBrand(event.target.value)} className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500">
                  <option value="All">All brands</option><option value="Brembo">Brembo</option><option value="MANN-FILTER">MANN-FILTER</option><option value="HELLA">HELLA</option><option value="Garrett">Garrett</option><option value="KYB">KYB</option><option value="WeatherTech">WeatherTech</option>
                </select>
              </label>
              <label className="text-[10px] uppercase tracking-wider text-gray-500">Condition
                <select value={condition} onChange={(event) => setCondition(event.target.value)} className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500">
                  <option value="All">New and used</option><option value="New">New</option><option value="Used">Used</option>
                </select>
              </label>
              <label className="text-[10px] uppercase tracking-wider text-gray-500">Maximum price
                <select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} className="mt-2 block w-full border border-white/10 bg-[#101114] px-3 py-3 text-xs text-gray-300 outline-none focus:border-blue-500">
                  <option value="25">Up to €25</option><option value="100">Up to €100</option><option value="250">Up to €250</option><option value="500">Up to €500</option><option value="1000">Any price</option>
                </select>
              </label>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
              <p className="text-[11px] text-gray-400"><span className="font-medium text-white">{filteredParts.length}</span> parts found</p>
              <button type="button" onClick={resetFilters} className="text-[10px] text-blue-300 underline underline-offset-4 hover:text-white">Reset filters</button>
            </div>
          </div>

          {filteredParts.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredParts.map((part) => (
                <article key={part.id} className="group overflow-hidden border border-white/[0.08] bg-[#15171c] transition hover:border-blue-500/50">
                  <div className="relative overflow-hidden bg-[#202229]">
                    <img src={part.image} alt={part.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                    {part.featured && <span className="absolute left-4 top-4 bg-[#3968d9] px-3 py-2 text-[9px] tracking-[0.15em]">FEATURED</span>}
                    <span className="absolute bottom-3 right-3 bg-[#111214]/90 px-3 py-2 text-xs font-medium">{formatPrice(part.price)}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-widest text-blue-400">{part.brand} / {part.category}</p>
                    <h3 className="mt-3 text-lg font-medium">{part.name}</h3>
                    <div className="mt-4 grid grid-cols-2 gap-3 border-y border-white/[0.08] py-4">
                      <div><p className="text-[9px] uppercase text-gray-500">Part number</p><p className="mt-1 text-[11px] text-gray-300">{part.partNumber}</p></div>
                      <div><p className="text-[9px] uppercase text-gray-500">Condition</p><p className="mt-1 text-[11px] text-gray-300">{part.condition}</p></div>
                      <div className="col-span-2"><p className="text-[9px] uppercase text-gray-500">Vehicle compatibility</p><p className="mt-1 text-[11px] text-gray-300">{part.compatibility}</p></div>
                      <div><p className="text-[9px] uppercase text-gray-500">Price</p><p className="mt-1 text-[11px] text-gray-300">{formatPrice(part.price)}</p></div>
                    </div>
                    <a href={`mailto:info@autouniversal.com?subject=${encodeURIComponent(`Spare part enquiry: ${part.name} (${part.partNumber})`)}`} className="mt-5 flex items-center justify-between bg-[#3968d9] px-4 py-3 text-[10px] transition hover:bg-[#4b7cff]">
                      Enquire about this part <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-white/[0.08] bg-[#15171c] px-6 py-16 text-center">
              <PackageSearch size={30} className="mx-auto text-blue-400" />
              <h3 className="mt-5 text-sm font-medium uppercase">No spare parts found</h3>
              <p className="mt-2 text-xs text-gray-500">Try changing your search or filters.</p>
              <button type="button" onClick={resetFilters} className="mt-5 rounded-full bg-[#3968d9] px-5 py-3 text-[10px] hover:bg-[#4b7cff]">Clear filters</button>
            </div>
          )}
          <p className="mt-6 text-[10px] leading-5 text-gray-600">Demo catalogue only. Verify part numbers, compatibility, stock, and prices before publishing.</p>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-10 sm:pb-28">
          <div className="flex flex-col justify-between gap-7 bg-[#3968d9] p-7 sm:p-12 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-100">Need help finding a part?</p>
              <h2 className="max-w-2xl text-3xl font-medium uppercase sm:text-4xl">LET'S FIND THE RIGHT FIT.</h2>
              <p className="mt-4 max-w-lg text-xs leading-6 text-blue-100">Contact our team with your vehicle details or part number and we can help you find a suitable match.</p>
            </div>
            <a href="mailto:info@autouniversal.com?subject=Spare%20parts%20enquiry" className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#111214] px-6 py-4 text-[11px] transition hover:bg-[#20242c]">Contact us <ArrowRight size={15} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
