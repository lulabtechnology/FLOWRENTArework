import type { ContractTemplateId } from "./contracts";

export type CurrencyCode = "USD" | "PAB";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: CurrencyCode;
  unit: "día" | "medio día" | "hora";
  category: string;
  highlight?: boolean;
  imageUrl: string;
  contractTemplateId: ContractTemplateId;
}

export const services: Service[] = [
  {
    id: "svc-honda-navi",
    slug: "honda-navi",
    name: "Honda Navi",
    shortDescription:
      "Moto compacta, fácil de manejar y perfecta para moverte por Isla Colón.",
    description:
      "La Honda Navi es ideal si quieres la libertad de una moto con el tamaño de una scooter. Perfecta para visitar La Gruta, Playa Bluff y Boca del Drago con bajo consumo de combustible.",
    price: 45,
    currency: "USD",
    unit: "día",
    category: "Moto",
    highlight: true,
    imageUrl: "/images/vehiculos/honda-navi.jpg",
    contractTemplateId: "honda-navi"
  },
  {
    id: "svc-speedy-vespa-150",
    slug: "speedy-vespa-150",
    name: "Speedy Vespa 150cc",
    shortDescription:
      "Scooter tipo Vespa 150cc, cómoda para dos personas y muy estable.",
    description:
      "La Speedy Vespa 150cc te da estilo y comodidad para recorrer la isla en pareja o con un amigo. Perfecta para rutas largas hacia Playa Bluff o Drago.",
    price: 55,
    currency: "USD",
    unit: "día",
    category: "Scooter",
    highlight: true,
    imageUrl: "/images/vehiculos/speedy-vespa-150.jpg",
    contractTemplateId: "speedy-vespa-150"
  },
  {
    id: "svc-ebike-pequena",
    slug: "ebike-pequena",
    name: "Ebike pequeña",
    shortDescription:
      "Bicicleta eléctrica compacta, ideal para el pueblo y distancias medias.",
    description:
      "Ebike de cuadro bajo y tamaño reducido, perfecta para quienes prefieren algo ligero y fácil de controlar. Ideal para ir al pueblo, Paunch o tramos cortos de la ruta a Bluff.",
    price: 39,
    currency: "USD",
    unit: "día",
    category: "Ebike",
    highlight: false,
    imageUrl: "/images/vehiculos/ebike-pequena.jpg",
    contractTemplateId: "ebike-pequena"
  },
  {
    id: "svc-ebike-grande-26",
    slug: "ebike-grande-26",
    name: 'Ebike grande 26"',
    shortDescription:
      "Ebike de aro 26 con llantas anchas para explorar toda la isla.",
    description:
      "Si quieres hacer rutas largas como La Gruta + Boca del Drago + Playa Estrella en un día, esta ebike de aro 26 con llantas anchas y batería de gran capacidad es la mejor opción.",
    price: 49,
    currency: "USD",
    unit: "día",
    category: "Ebike",
    highlight: true,
    imageUrl: "/images/vehiculos/ebike-grande-26.jpg",
    contractTemplateId: "ebike-grande-26"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((svc) => svc.slug === slug);
}
