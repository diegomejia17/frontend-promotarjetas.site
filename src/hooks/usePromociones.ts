import { useState, useEffect } from "react";
import { PromocionUnificada } from "../types";
import { mockPromotions } from "../data/mockPromotions";

export function usePromociones() {
  const [cards, setCards] = useState<PromocionUnificada[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        setLoading(true);

        // Define el origen de datos. Si Nixpacks o el entorno local tienen un VITE_API_URL, lo priorizará.
        // Si no, recaerá de vuelta en el servidor local de desarrollo del backend.
        const endpointUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api/promotions";

        const response = await fetch(endpointUrl);
        if (!response.ok) {
          throw new Error("Failed to load promotions API");
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        // Fallback: cargar datos mock si el backend no está disponible
        console.warn("API no disponible, cargando datos de demostración.", err);
        setCards(mockPromotions);
        setError(null); // No mostramos error al usuario, ya que tenemos datos de respaldo
      } finally {
        setLoading(false);
      }
    };

    fetchPromociones();
  }, []);

  return { cards, loading, error };
}

