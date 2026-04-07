import { useState } from "react";

export default function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#fff8f2] pt-10 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <div className="h-[1px] w-full bg-[#3c525d]/10" />
        </div>
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
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-[#3c525d] leading-[24px]">Repositorios</span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="https://github.com/diegomejia17/frontend-promotarjetas.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-[#eae1d7] hover:bg-[#3c525d] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 border border-transparent hover:border-[#3c525d]/10"
                >
                  <div className="flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:fill-white fill-[#3C525D] transition-colors">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[14px] text-[#3C525D] group-hover:text-white transition-colors">Frontend App</span>
                </a>
                <a 
                  href="https://github.com/diegomejia17/backend-promotarjetas.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-[#eae1d7] hover:bg-[#3c525d] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 border border-transparent hover:border-[#3c525d]/10"
                >
                  <div className="flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:fill-white fill-[#3C525D] transition-colors">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[14px] text-[#3C525D] group-hover:text-white transition-colors">Backend API</span>
                </a>
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
