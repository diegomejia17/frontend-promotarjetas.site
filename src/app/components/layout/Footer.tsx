import { useState } from "react";
import svgPaths from "../../../imports/svg-iy6v5sby86";

export default function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#fff8f2] border-t border-[rgba(251,242,232,0.2)] pt-10 pb-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <span className="font-['Manrope',sans-serif] font-extrabold text-[18px] text-[#3c525d] uppercase tracking-[-0.9px]">
                promotarjetas.site
              </span>
              <p className="font-normal text-[14px] text-[#42474b] leading-[22.75px]">
                La guía definitiva de beneficios bancarios en El Salvador.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-[#3c525d] leading-[24px]">Sobre el sitio</span>
              <div className="flex flex-col gap-[5px]">
                <span className="font-normal text-[14px] text-[#42474b]">Diego.proyectos.me</span>
                <button 
                  onClick={() => setIsLegalModalOpen(true)}
                  className="font-normal text-[14px] text-[#42474b] hover:text-[#3c525d] transition-colors text-center md:text-left"
                >
                  Legal
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-[#3c525d] leading-[24px]">Síguenos</span>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eae1d7] flex items-center justify-center cursor-pointer transition-all hover:bg-[#d8caba] hover:scale-110 active:scale-95">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d={svgPaths.p2b729200} fill="#3C525D" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#eae1d7] flex items-center justify-center cursor-pointer transition-all hover:bg-[#d8caba] hover:scale-110 active:scale-95">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.pf778600 || svgPaths.p1bfbe600} fill="#3C525D" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="font-normal text-[12px] text-[#73787b] uppercase tracking-[1.2px]">El Salvador, 2026</span>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10">
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl max-h-full flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 shrink-0">
              <h3 className="font-['Manrope',sans-serif] font-bold text-lg text-[#3c525d]">Términos Legales</h3>
              <button
                onClick={() => setIsLegalModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 font-['Inter',sans-serif] text-[15px] leading-relaxed text-[#42474b]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                Mauris massa. Vestibulum lacinia arcu eget nulla.
              </p>
              <p className="mb-4">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
                Sed convallis tristique sem.
              </p>
              <p>
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis 
                ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat 
                condimentum velit.
              </p>
            </div>
            
            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-end shrink-0">
              <button 
                onClick={() => setIsLegalModalOpen(false)}
                className="bg-[#3c525d] hover:bg-[#2b3a42] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
