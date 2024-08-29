import axios from "axios";
import { HttpClient } from "./http-client.interface";

export class AxiosClient implements HttpClient {
	constructor(baseURL: string) {
		axios.defaults.baseURL = baseURL;
		axios.defaults.headers.common["Accept"] = "application/json";
		axios.defaults.headers.common["Content-Type"] = "application/json";
	}

	async get<T>(url: string): Promise<T> {
		return await axios.get(url);
	}

	async post<T>(url: string, body: unknown): Promise<T> {
		return await axios.post(url, body);
	}

	async put<T>(url: string, body: unknown): Promise<T> {
		return await axios.put(url, body);
	}

	async delete<T>(url: string): Promise<T> {
		return await axios.delete(url);
	}
}
