import Image from "next/image";
import Section from "../../components/Section";

export default function RutasPage() {
  return (
    <Section
      title="Rutas recomendadas en Isla Colón"
      subtitle="Aquí puedes mostrar a tus clientes cómo aprovechar al máximo su alquiler visitando lugares icónicos por su cuenta."
    >
      <div className="space-y-10">
        <article className="grid gap-6 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="card overflow-hidden">
            <Image
              src="/images/rutas/la-gruta.jpg"
              alt="Entrada de la cueva La Gruta en Isla Colón"
              width={600}
              height={380}
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-xl font-bold text-slate-900">
              La Gruta: cueva y santuario secreto
            </h2>
            <p>
              A medio camino entre el pueblo y Boca del Drago encontrarás un
              letrero azul que indica el acceso a La Gruta. Desde ahí caminas
              por una vereda hasta un pequeño santuario y, siguiendo el sendero
              junto al arroyo, llegas a la entrada de la cueva.
            </p>
            <p>
              El recorrido interno dura unos 30 minutos y se hace caminando por
              agua poco profunda. No es una atracción comercial, sino una
              experiencia auténtica: por eso es importante llevar linterna,
              zapatos con buena suela y, si es posible, casco para evitar golpes
              con las rocas bajas.
            </p>
            <p className="text-xs text-slate-500">
              Recomendación: ideal en ebike grande o moto; evita hacerlo en
              días de lluvia fuerte.
            </p>
          </div>
        </article>

        <article className="grid gap-6 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="order-2 space-y-3 text-sm text-slate-700 sm:order-1 sm:text-base">
            <h2 className="text-xl font-bold text-slate-900">
              Playa Bluff & Secret Beach
            </h2>
            <p>
              Bluff es una playa larga de arena dorada, olas potentes y
              vegetación salvaje. Es muy conocida por el surf de alto nivel y
              por su ambiente más tranquilo que el pueblo. En el camino podrás
              ver selva, quizá perezosos y monos aulladores, y al llegar tendrás
              kilómetros de playa para caminar o descansar.
            </p>
            <p>
              Antes de llegar a Bluff, en la zona de Paunch, hay una pequeña
              bahía protegida por arrecife que funciona como piscina natural,
              perfecta para snorkel cuando el mar está calmado. Además, en Bluff
              hay restaurantes frente al mar ideales para almorzar o ver el
              atardecer.
            </p>
            <p className="text-xs text-slate-500">
              Recomendación: perfecta tanto para ebikes como motos; lleva agua,
              bloqueador biodegradable y equipo de snorkel.
            </p>
          </div>
          <div className="order-1 card overflow-hidden sm:order-2">
            <Image
              src="/images/rutas/playa-bluff.jpg"
              alt="Playa Bluff con fuerte oleaje y arena dorada"
              width={600}
              height={380}
              className="h-56 w-full object-cover"
            />
          </div>
        </article>

        <article className="grid gap-6 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="card overflow-hidden">
            <Image
              src="/images/rutas/boca-drago-starfish.jpg"
              alt="Aguas tranquilas en Boca del Drago"
              width={600}
              height={380}
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-xl font-bold text-slate-900">
              Boca del Drago & Playa Estrella (Starfish Beach)
            </h2>
            <p>
              Boca del Drago es una bahía tranquila de aguas claras, perfecta
              para pasar el día entre palmeras, nadar casi sin olas y comer
              pescado fresco en restaurantes sencillos frente al agua.
            </p>
            <p>
              Desde Drago, un sendero de unos 15 minutos entre manglares te
              lleva a Playa Estrella, famosa por sus grandes estrellas de mar en
              aguas bajas y transparentes. Lleva tu máscara para hacer snorkel y
              recuerda no tocar las estrellas para protegerlas.
            </p>
            <p className="text-xs text-slate-500">
              Recomendación: ruta perfecta para un día completo con ebike grande
              o moto; lleva agua, efectivo y protector solar.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
