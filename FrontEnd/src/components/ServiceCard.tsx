
import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  number: string;
  title: string;
  image: string;
  description: string;
  href: string;
};

const ServiceCard = ({
  number,
  title,
  image,
  description,
  href,
}: ServiceCardProps) => {
  return (
    <a
      href={href}
      className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden border border-white/[0.07] bg-[#17191d] p-5"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#101114]" />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="max-w-[190px] text-xs font-medium uppercase tracking-wide text-white">
          {title}
        </h3>
        <span className="text-[10px] text-gray-300">{number}</span>
      </div>

      <div className="relative">
        <p className="max-w-[220px] text-[11px] leading-5 text-gray-300">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[10px] text-white underline underline-offset-4 decoration-white/40">
          Learn more <ArrowUpRight size={12} />
        </span>
      </div>
    </a>
  );
};

export default ServiceCard;
