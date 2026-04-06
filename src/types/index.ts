export interface PromocionUnificada {
  // Datos Obligatorios
  id: string;
  bancoOrigen: 'AGRICOLA' | 'BAC' | 'CUSCATLAN';
  titulo: string;
  descripcionBreve: string;
  urlImagen: string;
  nombreComercio: string;

  // Datos Opcionales
  restriccionesHtml?: string;
  categoria?: string;
  fechaInicio?: string;
  fechaFin?: string;
  porcentajeDescuento?: number;
  urlExterna?: string;
}
