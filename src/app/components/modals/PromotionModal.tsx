import { PromocionUnificada } from "../../../types";
import { BANK_CONFIG } from "../cards/PromoCard";

interface PromotionModalProps {
  selectedCard: PromocionUnificada;
  onClose: () => void;
}

export default function PromotionModal({ selectedCard, onClose }: PromotionModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl max-h-full flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10 shrink-0">
          <div>
            <h3 className="font-['Manrope',sans-serif] font-bold text-lg text-[#3c525d]">{selectedCard.titulo}</h3>
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
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          {/* Cover Image */}
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative bg-gray-100">
            <img src={selectedCard.urlImagen} alt={selectedCard.titulo} className="w-full h-full object-cover" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex gap-2">
              {selectedCard.porcentajeDescuento && (
                <span className="bg-[#3e553f] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-[-0.6px]">
                  {selectedCard.porcentajeDescuento}% DTO
                </span>
              )}
              {selectedCard.categoria && (
                <span className="bg-[#3c525d] text-white px-3 py-1 rounded-xl font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-[-0.6px]">
                  {selectedCard.categoria}
                </span>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h4 className="font-['Manrope',sans-serif] font-bold text-xl text-[#3c525d] mb-2">Acerca de este beneficio</h4>
            <p className="font-['Inter',sans-serif] text-[15px] leading-relaxed text-[#42474b]">
              {selectedCard.descripcionBreve}
            </p>
          </div>

          {/* Dates */}
          {(selectedCard.fechaInicio || selectedCard.fechaFin) && (
            <div className="bg-[#fbf2e8] rounded-xl p-4 flex gap-4 text-sm font-['Inter',sans-serif] text-[#42474b]">
              {selectedCard.fechaInicio && (
                <div>
                  <span className="block font-semibold text-[#3c525d]">Inicia:</span>
                  {selectedCard.fechaInicio}
                </div>
              )}
              {selectedCard.fechaFin && (
                <div>
                  <span className="block font-semibold text-[#3c525d]">Vence:</span>
                  {selectedCard.fechaFin}
                </div>
              )}
            </div>
          )}

          {/* External Link */}
          {selectedCard.urlExterna && (
            <div className="mt-4">
              <a
                href={selectedCard.urlExterna}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 py-3 rounded-lg font-semibold font-['Inter',sans-serif] transition-colors"
              >
                Ver detalles en el sitio oficial
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
