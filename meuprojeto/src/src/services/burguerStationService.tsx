import axios from "axios";
import type { BurguerStation } from "../types/BurguerStation";

export const getBurguerStation = async (): Promise<BurguerStation[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/burguer");
        return resposta.data
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}