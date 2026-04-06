import svgPaths from "../../../imports/svg-iy6v5sby86";
import { banks, categories } from "../../../data/mockData";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  activeBank: string;
  setActiveBank: (val: string) => void;
  activeCategory: string | null;
  setActiveCategory: (val: string | null) => void;
}

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  activeBank,
  setActiveBank,
  activeCategory,
  setActiveCategory
}: SearchFiltersProps) {
  return (
    <section id="search-section" className="mt-10 backdrop-blur-[2px] bg-[rgba(255,248,242,0.8)] py-2 scroll-mt-24">
      <div className="flex flex-col gap-6">
        {/* Search */}
        <div className="relative">
          <div className="absolute left-[23px] top-1/2 -translate-y-1/2 w-[18px] h-[18px]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p8a35e00} fill="#73787B" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="¿Qué beneficio buscas hoy?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#efe7dd] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] pl-14 pr-6 py-[18px] text-[16px] text-[#42474b] placeholder:text-[rgba(115,120,123,0.7)] outline-none"
          />
        </div>

        {/* Banks */}
        <div className="flex flex-col gap-3">
          <div className="pl-1">
            <span className="font-semibold text-[12px] text-[#73787b] uppercase tracking-[1.2px]">Bancos</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {banks.map((bank) => (
              <button
                key={bank}
                onClick={() => setActiveBank(bank)}
                className={`px-5 py-[9px] rounded-xl text-[14px] transition-all duration-200 active:scale-95 ${
                  activeBank === bank
                    ? "bg-[#cbe4ec] text-[#4f666e] font-semibold shadow-sm"
                    : "bg-[#fbf2e8] text-[#42474b] font-medium border border-[rgba(194,199,203,0.2)] hover:bg-[#f3e4d1] hover:shadow-sm"
                }`}
              >
                {bank}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <div className="pl-1">
            <span className="font-semibold text-[12px] text-[#73787b] uppercase tracking-[1.2px]">Categorías Populares</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(isActive ? null : cat.name)}
                  className={`flex items-center gap-2 px-5 py-[9px] rounded-lg border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-[14px] font-medium transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-[#3c525d] text-white border-[#3c525d] shadow-md"
                      : "bg-white border-[rgba(194,199,203,0.1)] text-[#42474b] hover:bg-gray-50 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <svg width="12" height="12" viewBox={cat.vb} fill="none" className="shrink-0">
                    <path d={cat.icon} fill={isActive ? "white" : "#42474B"} />
                  </svg>
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
