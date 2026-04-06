import { useState, useEffect } from "react";
import { PromocionUnificada } from "../types";

export function usePromociones() {
  const [cards, setCards] = useState<PromocionUnificada[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        setLoading(true);
        
        // Define el origen de datos. Si Nixpacks o el entorno local tienen un VITE_API_URL, lo priorizará.
        // Si no, recaerá de vuelta en el json estático como simulador.
        const endpointUrl = import.meta.env.VITE_API_URL || "/api/promociones.json";
        
        const response = await fetch(endpointUrl);
        if (!response.ok) {
          throw new Error("Failed to load promotions API");
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError("Ocurrió un error consultando las promociones.");
      } finally {
        setLoading(false);
      }
    };

    fetchPromociones();
  }, []);

  return { cards, loading, error };
}
