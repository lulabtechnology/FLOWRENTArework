import Image from "next/image";
import Link from "next/link";
import type { Service } from "../lib/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="relative h-40 w-full sm:h-48">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
          className="object-contain bg-white"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
          {service.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
          {service.category}
        </p>
        <p className="mt-2 flex-1 text-sm text-slate-600">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900 sm:text-base">
            {service.currency === "USD" ? "US$" : "B/."}
            {service.price.toFixed(2)}{" "}
            <span className="text-xs font-normal text-slate-500">
              / {service.unit}
            </span>
          </p>
          <Link
            href={`/checkout?service=${service.slug}`}
            className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-soft hover:bg-brand-700 sm:text-sm"
          >
            Reservar
          </Link>
        </div>
      </div>
    </article>
  );
}
