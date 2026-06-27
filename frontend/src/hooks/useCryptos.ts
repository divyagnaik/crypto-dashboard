import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../services/cryptoService";

export function useCryptos() {
    return useQuery({
        queryKey: ["cryptos"],
        queryFn: getCryptos,
    });
}