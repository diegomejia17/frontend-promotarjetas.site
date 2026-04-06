import { PromocionUnificada } from "../../../types";
import svgPaths from "../../../imports/svg-iy6v5sby86";

export const BANK_CONFIG: Record<string, { name: string; abbr: string; color: string; logoUrl: string }> = {
  AGRICOLA: { name: "Banco Agrícola", abbr: "AG", color: "#15803d", logoUrl: "/logos/agricola.webp" },
  BAC: { name: "BAC Credomatic", abbr: "BAC", color: "#dc2626", logoUrl: "/logos/bac.svg" },
  CUSCATLAN: { name: "Banco Cuscatlán", abbr: "CUS", color: "#1e40af", logoUrl: "/logos/cuscatlan.png" },
};

export function PromoCard({ card, onClick }: { card: PromocionUnificada, onClick?: () => void }) {
  const bankInfo = BANK_CONFIG[card.bancoOrigen];

  // Derive badge logic
  let badge = "Beneficio";
  let badgeBg = "#cbe4ec";
  let badgeText = "#4f666e";

  if (card.porcentajeDescuento) {
    badge = `${card.porcentajeDescuento}% DTO`;
    badgeBg = "#3e553f";
    badgeText = "white";
  } else if (card.categoria) {
    badge = card.categoria;
    badgeBg = "#3c525d";
    badgeText = "white";
  }

  return (
    <div 
      onClick={onClick}
      className={`group bg-white rounded-[24px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col ${
        onClick ? 'cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5' : ''
      }`}
    >
      <div className="relative h-[224px] overflow-hidden">
        <img
          src={card.urlImagen}
          alt={card.titulo}
          className="absolute w-full h-[153%] top-[-26%] left-0 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div
          className="absolute top-3 left-4 px-3 py-[3.5px] rounded-xl"
          style={{ backgroundColor: badgeBg }}
        >
          <span
            className="font-['Inter',sans-serif] font-semibold text-[12px] uppercase tracking-[-0.6px]"
            style={{ color: badgeText }}
          >
            {badge}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 pb-3">
          <img 
            src={bankInfo.logoUrl} 
            alt={bankInfo.name} 
            className="h-6 w-auto object-contain drop-shadow-sm max-w-[80px]"
          />
          <span className="font-['Inter',sans-serif] font-semibold text-[10px] text-[#73787b] uppercase tracking-[1px]">
            {bankInfo.name}
          </span>
        </div>
        <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] leading-[28px] text-[#3c525d] pb-2">
          {card.titulo}
        </h3>
        <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22.75px] text-[#42474b] flex-1">
          {card.descripcionBreve}
        </p>
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-[rgba(194,199,203,0.1)]">
          <div className="flex items-center gap-2">
            <svg width="10.5" height="11.667" viewBox="0 0 10.5 11.6667" fill="none">
              <path d={svgPaths.p3bb7dc80} fill="#73787B" />
            </svg>
            <span className="font-['Inter',sans-serif] font-semibold text-[10px] text-[#73787b] uppercase tracking-[0.5px]">
              {card.fechaFin ? `Vigencia: ${card.fechaFin}` : `Disponible`}
            </span>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={svgPaths.p1a406200} fill="#3C525D" />
          </svg>
        </div>
      </div>
    </div>
  );
}
