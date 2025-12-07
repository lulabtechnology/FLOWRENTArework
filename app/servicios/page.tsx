import Section from "../../components/Section";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../lib/services";

export default function ServiciosPage() {
  return (
    <Section
      title="Catálogo de motos y ebikes"
      subtitle="Elige el vehículo que mejor se adapte a tu estilo de viaje. En la siguiente fase conectaremos este catálogo con PagueloFacil para que puedas reservar y pagar online."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-xl text-sm text-slate-600">
          Puedes usar esta página para detallar condiciones de alquiler:
          horarios de entrega y devolución, depósito, política de combustible y
          cualquier otra regla importante.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
