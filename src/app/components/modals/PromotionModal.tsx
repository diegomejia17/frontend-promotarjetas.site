import { useEffect, useState } from "react";
import { PromocionUnificada } from "../../../types";
import { BANK_CONFIG } from "../cards/PromoCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PromotionModalProps {
  selectedCard: PromocionUnificada;
  onClose: () => void;
}

export default function PromotionModal({ selectedCard, onClose }: PromotionModalProps) {
  const [copied, setCopied] = useState(false);

  // Bloquear scroll del body y escuchar tecla Escape para cerrar el modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "Consultar términos";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = String(date.getFullYear());
    return `${d}/${m}/${y}`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderDescription = (text: string) => {
    // Primero removemos etiquetas HTML crudas si las hubiera
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    
    // Regex para detectar URLs (http, https)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = cleanText.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        const cleanUrl = part.replace(/[.,;]$/, '');
        return (
          <a 
            key={i} 
            href={cleanUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-[#1a73e8] font-semibold hover:underline bg-blue-50 px-2 py-0.5 rounded"
          >
            enlace
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        );
      }
      return part;
    });
  };

  const bankInfo = BANK_CONFIG[selectedCard.bancoOrigen];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl md:rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] md:h-[650px] flex flex-col shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Superior - Inspirado en el layout de referencia */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-20 shrink-0">
          <div className="pr-4 min-w-0">
            <h3 className="font-['Manrope',sans-serif] font-bold text-lg md:text-xl text-[#3c525d] truncate leading-tight">
              {selectedCard.titulo}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs md:text-sm text-[#73787b]">
              <span>Comercio: <strong className="text-[#3c525d] font-semibold">{selectedCard.nombreComercio}</strong></span>
              <span>•</span>
              {selectedCard.fechaInicio && (
                <span>Publicado {formatDate(selectedCard.fechaInicio)}</span>
              )}
            </div>
          </div>

          {/* Barra de Acciones Derechas (Maximizar/Abrir, Compartir, Separador, Cerrar) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {selectedCard.urlExterna && (
              <a
                href={selectedCard.urlExterna}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir enlace de promoción"
                className="p-2 text-gray-500 hover:text-[#1a73e8] hover:bg-blue-50 rounded-lg transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}

            <button
              onClick={handleShare}
              title="Copiar enlace"
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow text-nowrap animate-in fade-in z-30">
                  ¡Enlace copiado!
                </span>
              )}
            </button>

            {/* Separador vertical */}
            <div className="h-5 w-[1px] bg-gray-200 mx-1" />

            {/* Botón de Cierre 'X' */}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Cerrar modal"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cuerpo del Modal (2 Columnas Grid en desktop) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Columna Izquierda: Imagen destacada del beneficio y Descripción */}
            <div className="md:col-span-5 flex flex-col gap-5">
              
              {/* Contenedor de Imagen Armonioso */}
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] flex items-center justify-center p-3 group shrink-0">
                <ImageWithFallback 
                  src={selectedCard.urlImagen} 
                  alt={selectedCard.titulo} 
                  loading="lazy" 
                  className="w-full h-full object-contain rounded-xl drop-shadow-xs group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {selectedCard.porcentajeDescuento && (
                    <span className="bg-[#3e553f] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-tight shadow-md">
                      {selectedCard.porcentajeDescuento}% DTO
                    </span>
                  )}
                  {selectedCard.categoria && (
                    <span className="bg-[#3c525d] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-tight shadow-md">
                      {selectedCard.categoria}
                    </span>
                  )}
                </div>
              </div>

              {/* Descripción y restricciones (Contenido Escroleable con Max Height) */}
              <div className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100 shadow-2xs flex flex-col overflow-hidden">
                <h4 className="font-['Manrope',sans-serif] font-bold text-sm text-[#3c525d] mb-2 flex items-center gap-2 shrink-0">
                  <svg className="w-4 h-4 text-[#73787b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Descripción y restricciones
                </h4>
                <div className="font-['Inter',sans-serif] text-xs md:text-sm leading-relaxed text-[#42474b] whitespace-pre-wrap overflow-y-auto custom-scrollbar pr-2 max-h-[180px] md:max-h-[220px]">
                  {renderDescription(selectedCard.descripcionBreve)}
                </div>
              </div>

            </div>

            {/* Columna Derecha: Información Estructurada y Botón de Acción a la Derecha */}
            <div className="md:col-span-7 flex flex-col gap-5 justify-between h-full">
              <div className="flex flex-col gap-5">
                
                {/* Banner Informativo / Hotspot Badge */}
                <div className="bg-[#eef5ff] border border-[#d0e3ff] rounded-xl p-3.5 flex items-center gap-3 text-sm text-[#1a73e8] font-medium shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    i
                  </div>
                  <span>
                    {selectedCard.porcentajeDescuento 
                      ? `Esta promoción ofrece un ${selectedCard.porcentajeDescuento}% de descuento con tarjetas ${bankInfo?.name || selectedCard.bancoOrigen}.`
                      : `Beneficio activo disponible exclusivamente para clientes de ${bankInfo?.name || selectedCard.bancoOrigen}.`
                    }
                  </span>
                </div>

                {/* Subtítulo de Sección */}
                <div className="text-xs uppercase tracking-wider text-[#73787b] font-bold font-['Inter',sans-serif]">
                  DETALLES DEL BENEFICIO • {bankInfo?.name || selectedCard.bancoOrigen}
                </div>

                {/* Lista de Filas Estructuradas */}
                <div className="flex flex-col divide-y divide-gray-100 border-t border-b border-gray-100 font-['Inter',sans-serif]">
                  
                  {/* Fila 1: Comercio */}
                  <div className="py-3.5 flex items-center justify-between text-sm group hover:bg-gray-50/60 px-2 rounded-lg transition-colors">
                    <span className="text-gray-500 font-normal">Comercio</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#3c525d]">{selectedCard.nombreComercio}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#1a73e8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Fila 2: Vigencia */}
                  <div className="py-3.5 flex items-center justify-between text-sm group hover:bg-gray-50/60 px-2 rounded-lg transition-colors">
                    <span className="text-gray-500 font-normal">Vigencia</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#3c525d]">
                        {selectedCard.fechaInicio ? `${formatDate(selectedCard.fechaInicio)} - ${formatDate(selectedCard.fechaFin)}` : 'Por tiempo limitado'}
                      </span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#1a73e8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Fila 3: Categoría */}
                  {selectedCard.categoria && (
                    <div className="py-3.5 flex items-center justify-between text-sm group hover:bg-gray-50/60 px-2 rounded-lg transition-colors">
                      <span className="text-gray-500 font-normal">Categoría</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#3c525d]">{selectedCard.categoria}</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#1a73e8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Fila 4: Banco Emisor */}
                  <div className="py-3.5 flex items-center justify-between text-sm group hover:bg-gray-50/60 px-2 rounded-lg transition-colors">
                    <span className="text-gray-500 font-normal">Banco emisor</span>
                    <div className="flex items-center gap-2">
                      {bankInfo?.logoUrl && (
                        <img 
                          src={bankInfo.logoUrl} 
                          alt={bankInfo.name} 
                          className="h-4 w-auto object-contain max-w-[60px]"
                        />
                      )}
                      <span className="font-semibold text-[#3c525d]">{bankInfo?.name || selectedCard.bancoOrigen}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#1a73e8] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

              {/* Botón CTA Primario en la Columna Derecha (al final) */}
              {selectedCard.urlExterna && (
                <a
                  href={selectedCard.urlExterna}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white py-3.5 px-6 rounded-xl font-bold font-['Inter',sans-serif] text-sm transition-all active:scale-[0.98] shadow-md hover:shadow-lg mt-2"
                >
                  Ir a la promoción
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              )}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
