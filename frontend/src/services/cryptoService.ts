import { api } from "./api";
import type { Crypto } from "../types/crypto";

export const getCryptos = async (): Promise<Crypto[]> => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 20,
      page: 1,
      sparkline: false,
    },
  });

  return response.data;
};