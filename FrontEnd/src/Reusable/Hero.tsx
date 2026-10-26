import { ArrowRight } from "lucide-react";
type HeroText={
    url:string,
    pText:string,
    btn:string

}

export default function Hero({ url ,pText,btn}: HeroText)  {
  return (
    <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-10 sm:pt-16">
      <div className="relative flex min-h-[390px] flex-col justify-center overflow-hidden border border-white/[0.08] bg-[#0d1420] px-7 py-16 sm:min-h-[470px] sm:px-14 lg:px-20">
        <img
          src={url}
          alt="Rental vehicle"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111214]/70 via-[#111214]/40 to-transparent" />

        <div className="relative max-w-2xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-blue-400">
            AUTOUNIVERSAL / CAR RENTAL
          </p>
          <h1 className="text-4xl font-medium uppercase leading-[1.08] tracking-tight sm:text-6xl">
            FIND YOUR
            <br />
            <span className="text-[#6595ff]">NEXT RIDE.</span>
          </h1>
          <p className="mt-6 max-w-lg text-xs leading-6 text-gray-300 sm:text-sm">
            {pText}
          </p>
          <a
            href="#inventory"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] transition hover:bg-[#4b7cff]"
          >
            {btn} <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}