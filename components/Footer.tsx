import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-top border-emerald-100 bg-emerald-50/40">
      <div className="main-container flex flex-col gap-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-800">
            Flow Rental Bocas · Ebikes &amp; Motos
          </p>
          <p className="mt-1 max-w-md text-xs sm:text-sm">
            Web de ejemplo para un negocio de alquiler de vehículos en Bocas del
            Toro. Cambia los textos y el branding por los de tu cliente real.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/admin/login"
            className="rounded-full border border-emerald-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700"
          >
            Panel administrativo
          </Link>
          <p className="text-[11px] text-slate-500 sm:text-xs">
            © {new Date().getFullYear()} Tu marca. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
