import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import SearchFilters from "./components/features/SearchFilters";
import PromotionsGrid from "./components/features/PromotionsGrid";
import PromotionModal from "./components/modals/PromotionModal";
import Footer from "./components/layout/Footer";
import { usePromociones } from "../hooks/usePromociones";
import { PromocionUnificada } from "../types";

const mapBankToId = (bankName: string) => {
  if (bankName === "Agrícola") return "AGRICOLA";
  if (bankName === "BAC") return "BAC";
  if (bankName === "Cuscatlán") return "CUSCATLAN";
  return "";
};

export default function App() {
  const [activeBank, setActiveBank] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { cards, loading, error } = usePromociones();
  const [selectedCard, setSelectedCard] = useState<PromocionUnificada | null>(null);

  // Lógica para mostrar/ocultar el botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredCards = cards.filter((card) => {
    // Bank filter
    const bankMatch = activeBank === "Todos" || card.bancoOrigen === mapBankToId(activeBank);

    // Category filter
    const categoryMatch = !activeCategory || card.categoria === activeCategory;

    // Search query filter
    const normalizedQuery = searchQuery.toLowerCase();
    const queryMatch =
      !searchQuery ||
      card.titulo.toLowerCase().includes(normalizedQuery) ||
      card.descripcionBreve.toLowerCase().includes(normalizedQuery);

    return bankMatch && categoryMatch && queryMatch;
  });

  return (
    <div className="bg-[#fff8f2] min-h-screen font-['Inter',sans-serif]">
      <Header />

      <main className="max-w-[1280px] mx-auto px-6">
        <Hero />
        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeBank={activeBank}
          setActiveBank={setActiveBank}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Cards Grid Component */}
        <section id="results-grid" className="mt-10 pb-16 min-h-[400px] scroll-mt-24">
          <PromotionsGrid 
            loading={loading}
            error={error}
            filteredCards={filteredCards}
            onCardClick={setSelectedCard}
          />
        </section>
      </main>

      <Footer />

      {/* Botón Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[90] w-12 h-12 bg-[#3c525d] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
        aria-label="Volver arriba"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Extracted Native Modal */}
      {selectedCard && (
        <PromotionModal 
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}
