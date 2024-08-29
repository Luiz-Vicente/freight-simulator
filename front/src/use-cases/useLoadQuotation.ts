import { AxiosClient } from "../http/axios.client";
import { CreateFreightQuotationDto } from "./dto/freight-quotation.dto";

const client = new AxiosClient("http://localhost:3000");

export async function useLoadQuotation(data: CreateFreightQuotationDto) {
	return await client.post("/freight-quotations", data);
}
