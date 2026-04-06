import { useState } from "react";
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

  const { cards, loading, error } = usePromociones();
  const [selectedCard, setSelectedCard] = useState<PromocionUnificada | null>(null);

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
        <section className="mt-10 pb-16 min-h-[400px]">
          <PromotionsGrid 
            loading={loading}
            error={error}
            filteredCards={filteredCards}
            onCardClick={setSelectedCard}
          />
        </section>
      </main>

      <Footer />

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
