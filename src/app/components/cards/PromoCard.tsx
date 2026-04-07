import { useState } from "react";
import { PromocionUnificada } from "../../../types";
import svgPaths from "../../../imports/svg-iy6v5sby86";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export const BANK_CONFIG: Record<string, { name: string; abbr: string; color: string; logoUrl: string }> = {
  AGRICOLA: { name: "Banco Agrícola", abbr: "AG", color: "#15803d", logoUrl: "/logos/agricola.webp" },
  BAC: { name: "BAC Credomatic", abbr: "BAC", color: "#dc2626", logoUrl: "/logos/bac.svg" },
  CUSCATLAN: { name: "Banco Cuscatlán", abbr: "CUS", color: "#1e40af", logoUrl: "/logos/cuscatlan.png" },
};

export function PromoCard({ card, onClick }: { card: PromocionUnificada, onClick?: () => void }) {
  const bankInfo = BANK_CONFIG[card.bancoOrigen];

  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = String(date.getFullYear()).slice(-2);
    return `${d}/${m}/${y}`;
  };

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
      <div className="relative h-[224px] overflow-hidden rounded-t-[24px]">
        <ImageWithFallback
          src={card.urlImagen}
          alt={card.titulo}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.1]"
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
        <h3 className="font-['Manrope',sans-serif] font-bold text-[18px] leading-[26px] text-[#3c525d] mb-2 line-clamp-2 h-[52px] overflow-hidden">
          {card.titulo}
        </h3>
        <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#42474b] line-clamp-3 h-[66px] overflow-hidden mb-6">
          {card.descripcionBreve.replace(/<[^>]*>?/gm, '')}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-[rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#73787B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="font-['Inter',sans-serif] font-semibold text-[10px] text-[#73787b] uppercase tracking-[1px]">
              {card.fechaFin ? `Vigencia: ${formatDate(card.fechaFin)}` : `Disponible`}
            </span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3C525D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
