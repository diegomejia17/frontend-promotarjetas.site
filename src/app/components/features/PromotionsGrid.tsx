import { useState, useEffect } from "react";
import { PromocionUnificada } from "../../../types";
import { PromoCard } from "../cards/PromoCard";

interface PromotionsGridProps {
  loading: boolean;
  error: string | null;
  filteredCards: PromocionUnificada[];
  onCardClick: (card: PromocionUnificada) => void;
}

const ITEMS_PER_PAGE = 12;

export default function PromotionsGrid({ loading, error, filteredCards, onCardClick }: PromotionsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCards.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 flex-col gap-4">
        <div className="w-10 h-10 border-4 border-[#3c525d] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#3c525d] font-semibold tracking-tight">Cargando promociones...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-100 rounded-2xl p-12 text-center">
        <p className="text-red-600 font-semibold text-[18px] mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (filteredCards.length === 0) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-16 text-center shadow-sm">
        <p className="text-[#3c525d] font-semibold text-[18px]">
          No se encontraron promociones para los filtros seleccionados.
        </p>
        <p className="text-gray-500 mt-2">Intenta limpiar los filtros o realizar una nueva búsqueda.</p>
      </div>
    );
  }

  // Pagination Logic
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCards = filteredCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('results-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCards.map((card, i) => (
          <PromoCard
            key={`${card.id}-${i}-${currentPage}`}
            card={card}
            onClick={() => onCardClick(card)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-500 font-['Inter',sans-serif]">
            Mostrando <span className="font-semibold text-[#3c525d]">{startIndex + 1}</span> a <span className="font-semibold text-[#3c525d]">{Math.min(startIndex + ITEMS_PER_PAGE, filteredCards.length)}</span> de <span className="font-semibold text-[#3c525d]">{filteredCards.length}</span> beneficios
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 disabled:opacity-40 disabled:bg-gray-50 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                // Simple logic for brevity, you can add "..." for many pages
                if (totalPages > 6 && Math.abs(page - currentPage) > 2 && page !== 1 && page !== totalPages) {
                  if (page === currentPage - 3 || page === currentPage + 3) return <span key={page} className="px-1 text-gray-300">...</span>;
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-semibold text-sm transition-all active:scale-95 shadow-sm ${
                      currentPage === page
                        ? "bg-[#3c525d] text-white shadow-[#3c525d]/20"
                        : "bg-white text-[#73787b] border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 disabled:opacity-40 disabled:bg-gray-50 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
