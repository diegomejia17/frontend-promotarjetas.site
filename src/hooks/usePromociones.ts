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
        const response = await fetch("/api/promociones.json");
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
