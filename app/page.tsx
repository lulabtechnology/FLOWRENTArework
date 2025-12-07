import Image from "next/image";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import FAQItem from "../components/FAQItem";
import { services } from "../lib/services";

const faqs = [
  {
    question: "¿Necesito experiencia previa para manejar las motos o ebikes?",
    answer:
      "Para las motos y la Vespa necesitas licencia y experiencia básica en moto. Las ebikes son más sencillas y son ideales si no manejas moto, pero igual debes sentirte cómodo en bicicleta."
  },
  {
    question: "¿Cómo será el pago en línea?",
    answer:
      "En la siguiente fase conectaremos la web con PagueloFacil. Podrás reservar tu vehículo, confirmar el monto y pagar con tarjeta de forma segura desde tu celular."
  },
  {
    question: "¿Qué incluye el alquiler?",
    answer:
      "Incluye el vehículo, casco(s), candado y explicación rápida de rutas. El combustible en el caso de las motos no está incluido."
  },
  {
    question: "¿Puedo explorar por mi cuenta lugares como La Gruta o Playa Bluff?",
    answer:
      "Sí. Te daremos instrucciones claras y recomendaciones de seguridad para que puedas visitar La Gruta, Playa Bluff, Boca del Drago y Playa Estrella por tu cuenta."
  }
];

const testimonials = [
  {
    name: "Lucía (Argentina)",
    role: "Viajera en solitario",
    quote:
      "Con la ebike grande hice La Gruta y Playa Bluff en un día. Me sentí súper libre y segura todo el tiempo."
  },
  {
    name: "Carlos y Andrea (Colombia)",
    role: "Pareja viajera",
    quote:
      "Alquilamos la Vespa 150cc y fue perfecto para llegar a Boca del Drago y luego caminar hasta Playa Estrella. Mucho mejor que depender de taxis."
  }
];

export default function HomePage() {
  const highlightedServices = services.filter((svc) => svc.highlight);

  return (
    <>
      <Hero />

      <Section
        id="quienes-somos"
        eyebrow="Quiénes somos"
        title="Alquiler de ebikes y motos pensado para viajeros curiosos"
        subtitle="Usa este espacio para contar la historia de tu negocio, por qué empezaste a alquilar ebikes/motos en Bocas y qué te hace diferente."
      >
        <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              Aquí puedes explicar que ayudas a los viajeros a moverse de forma
              independiente por Isla Colón, sin depender de tours masivos ni
              horarios rígidos.
            </p>
            <p>
              También puedes mencionar tu enfoque en la seguridad: cascos,
              explicación de uso, recomendaciones de rutas según la experiencia
              del cliente y soporte por WhatsApp ante cualquier duda.
            </p>
            <p>
              El objetivo es que las personas se sientan como locales, parando
              donde quieran para ver perezosos, monos aulladores, playas
              escondidas y atardeceres épicos.
            </p>
          </div>
          <div className="card relative overflow-hidden">
            <Image
              src="/images/quienes-somos-equipo-bocas.jpg"
              alt="Equipo de alquiler de ebikes y motos en Bocas del Toro"
              width={520}
              height={360}
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>
        </div>
      </Section>

      <Section
        id="servicios"
        eyebrow="Vehículos"
        title="Elige tu ebike o moto ideal"
        subtitle="Cuatro opciones pensadas para diferentes estilos de viaje: desde explorar el pueblo hasta hacer rutas largas por toda la isla."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {highlightedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Rutas recomendadas"
        title="Explora Isla Colón con estas tres rutas imperdibles"
        subtitle="Cada vehículo incluye recomendaciones para visitar lugares icónicos como La Gruta, Playa Bluff y Boca del Drago & Playa Estrella."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="card flex flex-col overflow-hidden">
            <Image
              src="/images/rutas/la-gruta.jpg"
              alt="Entrada de la cueva La Gruta en Isla Colón"
              width={400}
              height={260}
              className="h-40 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-slate-900">
                La Gruta & Santuario
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ruta corta en ebike o moto hasta una cueva atravesada por un
                arroyo, con un pequeño santuario en la entrada. Ideal para
                viajeros que quieren una aventura diferente, caminando con
                linterna dentro de la cueva. :contentReference[oaicite:3]{index=3}
              </p>
            </div>
          </article>

          <article className="card flex flex-col overflow-hidden">
            <Image
              src="/images/rutas/playa-bluff.jpg"
              alt="Playa Bluff con olas y arena dorada"
              width={400}
              height={260}
              className="h-40 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-slate-900">
                Playa Bluff & Secret Beach
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Una carretera costera rodeada de selva, olas fuertes para surf y
                posibilidades de ver tortugas, perezosos y monos aulladores. En
                el camino hay un spot escondido tipo piscina natural para
                snorkel. :contentReference[oaicite:4]{index=4}
              </p>
            </div>
          </article>

          <article className="card flex flex-col overflow-hidden">
            <Image
              src="/images/rutas/boca-drago-starfish.jpg"
              alt="Agua calma y palmeras en Boca del Drago"
              width={400}
              height={260}
              className="h-40 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-slate-900">
                Boca del Drago & Playa Estrella
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ruta perfecta para un día entero: bahía tranquila con historia
                de piratas, caminata corta por manglar y playa de aguas
                cristalinas con estrellas de mar gigantes. :contentReference[oaicite:5]{index=5}
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Todo lo que necesitas saber antes de alquilar"
      >
        <div className="grid gap-4 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <div className="card flex flex-col gap-3 p-4 sm:p-5">
            <p className="text-sm font-semibold text-slate-900">
              Tip para tus clientes
            </p>
            <p className="text-sm text-slate-600">
              Usa este espacio para aclarar horarios de entrega y devolución,
              depósitos de seguridad, qué pasa si llueve, etc. La idea es que el
              viajero reserve con cero dudas.
            </p>
            <Image
              src="/images/faq-rider.jpg"
              alt="Turista revisando un mapa en su scooter"
              width={480}
              height={260}
              className="mt-2 h-32 w-full rounded-2xl object-cover sm:h-40"
            />
          </div>
        </div>
      </Section>

      <Section
        id="testimonios"
        eyebrow="Testimonios"
        title="Experiencias de viajeros reales"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="card flex flex-col justify-between p-5"
            >
              <blockquote className="text-sm text-slate-700 sm:text-base">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-slate-900">
                  {item.name}
                </span>
                <span className="block text-xs text-slate-500">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="contacto"
        eyebrow="Contacto"
        title="Escríbenos para reservas especiales o grupos"
        subtitle="Además del sistema de reservas online, tus clientes pueden contactarte directamente por este formulario."
        background="muted"
      >
        <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
          <form
            className="card space-y-4 p-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="text-xs font-semibold text-slate-700"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="Ej. Ana Gómez"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="text-xs font-semibold text-slate-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="nombre@correo.com"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="telefono"
                  className="text-xs font-semibold text-slate-700"
                >
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="mt-1 w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="+507 6000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="vehiculo"
                  className="text-xs font-semibold text-slate-700"
                >
                  Vehículo de interés
                </label>
                <select
                  id="vehiculo"
                  name="vehiculo"
                  className="mt-1 w-full rounded-xl border border-emerald-100 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Selecciona una opción</option>
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.slug}>
                      {svc.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="text-xs font-semibold text-slate-700"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 w-full rounded-xl border border-emerald-100 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="Cuéntanos fechas, horarios y si quieres visitar alguna ruta en específico."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 sm:w-auto"
            >
              Enviar mensaje (demo)
            </button>
            <p className="mt-2 text-[11px] text-slate-500">
              En la versión final conectaremos este formulario para que los
              mensajes lleguen al correo o WhatsApp del negocio.
            </p>
          </form>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Información de contacto
              </p>
              <p className="mt-2">📍 Dirección del local en Isla Colón.</p>
              <p>📞 Teléfono / WhatsApp de reservas.</p>
              <p>📧 Correo oficial para consultas.</p>
            </div>
            <div className="card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Imágenes sugeridas
              </p>
              <p className="mt-2 text-sm">
                Aquí puedes colocar un mapa embebido o una foto de la fachada
                del taller/tienda para que los clientes te identifiquen fácil.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
