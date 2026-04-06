import { PromocionUnificada } from "../../../types";
import { PromoCard } from "../cards/PromoCard";

interface PromotionsGridProps {
  loading: boolean;
  error: string | null;
  filteredCards: PromocionUnificada[];
  onCardClick: (card: PromocionUnificada) => void;
}

export default function PromotionsGrid({ loading, error, filteredCards, onCardClick }: PromotionsGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 flex-col gap-4">
        <div className="w-10 h-10 border-4 border-[#3c525d] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#3c525d] font-semibold">Cargando promociones...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 font-semibold text-[18px]">{error}</p>
      </div>
    );
  }

  if (filteredCards.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#3c525d] font-semibold text-[18px]">
          No se encontraron promociones.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCards.map((card, i) => (
        <PromoCard
          key={`${card.id}-${i}`}
          card={card}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}
