import svgPaths from "../../../imports/svg-iy6v5sby86";

export default function Hero() {
  const handleExploreClick = () => {
    const el = document.getElementById("search-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = el.querySelector("input");
      if (input) {
        setTimeout(() => input.focus({ preventScroll: true }), 500);
      }
    }
  };

  return (
    <section className="mt-8 rounded-[24px] p-8 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(162deg, rgb(60, 82, 93) 0%, rgb(84, 106, 118) 100%)" }}>
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
        <svg width="183" height="133" viewBox="0 0 183.333 133.333" fill="none">
          <path d={svgPaths.p1bfbe600} fill="white" />
        </svg>
      </div>
      <div className="relative z-10 max-w-[735px] flex flex-col gap-4">
        <div className="bg-[#cfeace] self-start px-3 py-1 rounded-xl">
          <span className="font-semibold text-[12px] text-[#3e553f] uppercase tracking-[1.2px]">Descubre El Salvador</span>
        </div>
        <h1 className="font-['Manrope',sans-serif] font-extrabold text-[28px] md:text-[36px] leading-[1.25] text-white tracking-[-0.9px]">
          Las promociones de tus tarjetas en un solo lugar
        </h1>
        <p className="text-white opacity-90 text-[16px] md:text-[18px] leading-[1.625] max-w-[512px]">
          Explora beneficios exclusivos proporcionados para maximizar tu ahorro con el uso de tus tarjetas de bancos locales
        </p>
        <div className="pt-4">
          <button 
            onClick={handleExploreClick}
            className="bg-white text-[#3c525d] font-semibold text-[16px] px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
          >
            Explorar hoy
          </button>
        </div>
      </div>
    </section>
  );
}
