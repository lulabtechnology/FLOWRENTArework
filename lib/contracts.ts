export type ContractTemplateId =
  | "honda-navi"
  | "speedy-vespa-150"
  | "ebike-pequena"
  | "ebike-grande-26";

export interface ContractTemplate {
  id: ContractTemplateId;
  name: string;
  description: string;
  pdfUrl: string;
}

export const contractTemplates: Record<ContractTemplateId, ContractTemplate> = {
  "honda-navi": {
    id: "honda-navi",
    name: "Contrato de alquiler Honda Navi",
    description:
      "Condiciones de alquiler, uso y devolución para la moto Honda Navi.",
    pdfUrl: "/contracts/honda-navi.pdf"
  },
  "speedy-vespa-150": {
    id: "speedy-vespa-150",
    name: "Contrato de alquiler Speedy Vespa 150cc",
    description:
      "Términos de alquiler para la scooter Speedy Vespa 150cc, ideal para 2 personas.",
    pdfUrl: "/contracts/speedy-vespa-150.pdf"
  },
  "ebike-pequena": {
    id: "ebike-pequena",
    name: "Contrato de alquiler Ebike pequeña",
    description:
      "Condiciones para el uso de la ebike compacta, perfecta para moverse por el pueblo.",
    pdfUrl: "/contracts/ebike-pequena.pdf"
  },
  "ebike-grande-26": {
    id: "ebike-grande-26",
    name: 'Contrato de alquiler Ebike grande 26"',
    description:
      "Términos de alquiler para la ebike de aro 26 con llantas anchas, lista para rutas largas.",
    pdfUrl: "/contracts/ebike-grande-26.pdf"
  }
};

export function getContractTemplateById(
  id: ContractTemplateId
): ContractTemplate {
  return contractTemplates[id];
}
