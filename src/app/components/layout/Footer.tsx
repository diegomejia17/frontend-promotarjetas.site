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
                La guía definitiva de beneficios bancarios en El Salvador
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-[#3c525d] leading-[24px]">Sobre el sitio</span>
              <div className="flex flex-col gap-[5px]">
                <a 
                  href="https://Diego.proyectos.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-normal text-[14px] text-[#42474b] hover:text-[#3c525d] transition-colors"
                >
                  Diego.proyectos.me
                </a>
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
              <div className="flex flex-col gap-6">
                <div className="text-center mb-2">
                  <h4 className="font-bold text-[#3c525d] text-base uppercase tracking-tight">AVISO LEGAL Y DECLARACIÓN DE USO DE INFORMACIÓN PÚBLICA</h4>
                </div>

                <section>
                  <h5 className="font-bold text-[#3c525d] mb-1">1. Naturaleza y Origen de la Información</h5>
                  <p>
                    La información recopilada, procesada y presentada a través de este proyecto/plataforma proviene única y exclusivamente de fuentes de acceso libre y público. La extracción de estos datos se ampara en los principios de máxima publicidad y disponibilidad establecidos en la Ley de Acceso a la Información Pública (LAIP) de la República de El Salvador, ejerciendo el derecho ciudadano de buscar y recibir información que se encuentre en poder de entes obligados o en el dominio público.
                  </p>
                </section>

                <section>
                  <h5 className="font-bold text-[#3c525d] mb-1">2. Finalidad Estrictamente No Comercial</h5>
                  <p>
                    Se declara de manera expresa y formal que la extracción, sistematización y uso de esta información tiene fines netamente cívicos, de investigación o académicos. No existe ninguna intención de comercializar, vender, lucrar o generar beneficios económicos directos ni indirectos a partir de los datos obtenidos. Este esfuerzo no constituye una actividad comercial.
                  </p>
                </section>

                <section>
                  <h5 className="font-bold text-[#3c525d] mb-1">3. Respeto a la Propiedad Intelectual y Datos Personales</h5>
                  <p>
                    El tratamiento de la información se realiza respetando la legislación salvadoreña vigente, incluyendo la Ley de Propiedad Intelectual. Asimismo, cualquier dato de carácter personal que pudiera encontrarse dentro de la información pública extraída se manejará en estricto apego al respeto del derecho a la intimidad, el honor y la propia imagen, garantizados en la Constitución de la República de El Salvador.
                  </p>
                </section>

                <section>
                  <h5 className="font-bold text-[#3c525d] mb-1">4. Exención de Responsabilidad</h5>
                  <p>
                    La información se extrae y se expone "tal cual" se encuentra en sus fuentes originales. No se asume responsabilidad legal por la exactitud, veracidad, integridad o actualización de los datos, ni por los errores u omisiones que las fuentes de origen pudieran contener.
                  </p>
                </section>

                <section>
                  <h5 className="font-bold text-[#3c525d] mb-1">5. Canal de Contacto y Resolución de Controversias</h5>
                  <p className="mb-4">
                    Este proyecto opera bajo el principio de buena fe. En caso de que alguna institución, titular de datos, autor o tercero con interés legítimo considere que la extracción o visualización de cierta información vulnera sus derechos, términos de servicio o normativas vigentes, se establece el siguiente canal de comunicación directa y expedita para solicitar la revisión, ocultamiento o eliminación inmediata de los datos en cuestión:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="font-semibold text-[#3c525d]">Responsable: <span className="font-normal text-[#42474b]">Diego Mejía</span></p>
                    <p className="font-semibold text-[#3c525d]">Correo electrónico: <a href="mailto:mejiadiego17@gmail.com" className="text-[#1a73e8] hover:underline font-normal">mejiadiego17@gmail.com</a></p>
                  </div>
                  <p className="mt-4 text-sm italic">
                    Cualquier solicitud recibida a través de este medio será atendida con la mayor prontitud para solventar cualquier problemática de mutuo acuerdo y sin necesidad de procesos administrativos o judiciales adicionales.
                  </p>
                </section>
              </div>
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
