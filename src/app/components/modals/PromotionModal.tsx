import { useEffect, useState } from "react";
import { PromocionUnificada } from "../../../types";
import { BANK_CONFIG } from "../cards/PromoCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PromotionModalProps {
  selectedCard: PromocionUnificada;
  onClose: () => void;
}

export default function PromotionModal({ selectedCard, onClose }: PromotionModalProps) {
  // Bloquear scroll del body al abrir el modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = String(date.getFullYear()).slice(-2);
    return `${d}/${m}/${y}`;
  };

  const renderDescription = (text: string) => {
    // Primero removemos etiquetas HTML crudas
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    
    // Regex para detectar URLs (http, https)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = cleanText.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        // Limpiamos puntuación común al final de la URL si existe
        const cleanUrl = part.replace(/[.,;]$/, '');
        return (
          <a 
            key={i} 
            href={cleanUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-[#1a73e8] font-semibold hover:underline bg-blue-50 px-2 py-0.5 rounded ml-1 mr-1"
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

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl h-[85vh] md:h-[80vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-20 shrink-0">
          <div className="pr-8">
            <h3 className="font-['Manrope',sans-serif] font-bold text-lg text-[#3c525d] leading-tight">{selectedCard.titulo}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="font-['Inter',sans-serif] text-sm text-[#73787b]">
                {selectedCard.nombreComercio}
              </span>
              <span className="text-[#c2c7cb] text-sm">•</span>
              {BANK_CONFIG[selectedCard.bancoOrigen]?.logoUrl && (
                <img
                  src={BANK_CONFIG[selectedCard.bancoOrigen].logoUrl}
                  alt={BANK_CONFIG[selectedCard.bancoOrigen].name}
                  className="h-4 w-auto object-contain drop-shadow-sm max-w-[60px]"
                />
              )}
              <span className="font-['Inter',sans-serif] text-sm text-[#73787b]">
                {BANK_CONFIG[selectedCard.bancoOrigen]?.name}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Fixed Image Area */}
        <div className="px-6 pt-6 shrink-0">
          <div className="w-full h-40 md:h-52 rounded-xl overflow-hidden relative bg-gray-100 shadow-inner">
            <ImageWithFallback 
              src={selectedCard.urlImagen} 
              alt={selectedCard.titulo} 
              loading="lazy" 
              className="w-full h-full object-cover" 
            />
            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex gap-2">
              {selectedCard.porcentajeDescuento && (
                <span className="bg-[#3e553f] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-[-0.6px] shadow-sm">
                  {selectedCard.porcentajeDescuento}% DTO
                </span>
              )}
              {selectedCard.categoria && (
                <span className="bg-[#3c525d] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-[-0.6px] shadow-sm">
                  {selectedCard.categoria}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Description Only */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <h4 className="font-['Manrope',sans-serif] font-bold text-xl text-[#3c525d] mb-2 tracking-tight">Acerca de este beneficio</h4>
          <div className="font-['Inter',sans-serif] text-[15.5px] leading-[1.6] text-[#42474b] whitespace-pre-wrap">
            {renderDescription(selectedCard.descripcionBreve)}
          </div>
        </div>

        {/* Fixed Footer info */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 shrink-0 flex flex-col gap-4">
          {/* Dates */}
          {(selectedCard.fechaInicio || selectedCard.fechaFin) && (
            <div className="bg-[#fbf7f2] border border-[#f3e4d1] rounded-xl p-3 flex flex-wrap gap-x-8 gap-y-2 text-sm font-['Inter',sans-serif] text-[#42474b]">
              {selectedCard.fechaInicio && (
                <div>
                  <span className="block font-semibold text-[#3c525d] text-[10px] uppercase tracking-wider">Vigente desde</span>
                  <span className="text-[13px]">{formatDate(selectedCard.fechaInicio)}</span>
                </div>
              )}
              {selectedCard.fechaFin && (
                <div>
                  <span className="block font-semibold text-[#3c525d] text-[10px] uppercase tracking-wider">Vence el</span>
                  <span className="text-[13px]">{formatDate(selectedCard.fechaFin)}</span>
                </div>
              )}
            </div>
          )}

          {/* External Link */}
          {selectedCard.urlExterna && (
            <a
              href={selectedCard.urlExterna}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white px-8 py-3 rounded-xl font-bold font-['Inter',sans-serif] transition-all active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Ir a la promoción
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
