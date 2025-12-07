import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="main-container flex flex-col items-center gap-10 py-10 lg:flex-row lg:py-16">
        <div className="w-full lg:w-1/2">
          <p className="section-heading">Explora Isla Colón a tu ritmo</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ebikes y motos{" "}
            <span className="block text-brand-700">
              para descubrir Bocas del Toro.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            Alquila una moto Honda Navi, una Speedy Vespa 150cc o una ebike
            eléctrica y recorre lugares como La Gruta, Playa Bluff, Boca del
            Drago y Starfish Beach sin depender de taxis ni tours masivos.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/servicios"
              className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-700"
            >
              Ver vehículos y precios
            </Link>
            <Link
              href="/rutas"
              className="text-sm font-medium text-brand-700 hover:text-brand-800"
            >
              Ver rutas recomendadas →
            </Link>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-600 sm:text-sm">
            <div className="rounded-2xl bg-white/80 p-4 shadow-soft">
              <dt className="font-semibold text-slate-800">Reservas online</dt>
              <dd className="mt-1">
                En la siguiente fase conectaremos la web con PagueloFacil para
                cobrar con tarjeta de forma segura.
              </dd>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-soft">
              <dt className="font-semibold text-slate-800">Rutas curadas</dt>
              <dd className="mt-1">
                La Gruta, Bluff, Boca del Drago y Playa Estrella explicadas
                paso a paso con tips locales.
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative w-full max-w-md lg:w-1/2">
          <div className="card relative overflow-hidden">
            <Image
              src="/images/hero-rider.jpg"
              alt="Turista en ebike recorriendo la costa de Bocas del Toro"
              width={640}
              height={480}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/60 via-emerald-700/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Ruta sugerida
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                Boca del Drago &amp; Starfish Beach
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Llega en ebike o moto hasta Drago y camina entre manglares para
                disfrutar de Playa Estrella y sus estrellas de mar.
              </p>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-white/90 p-3 text-xs shadow-soft sm:block">
            <p className="font-semibold text-brand-700">
              Explora sin preocupaciones
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Alquiler diario, cascos incluidos y soporte en ruta por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
