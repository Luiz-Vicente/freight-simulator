import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient } from 'src/domain/interfaces/http.client';

export class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, headers?: Record<string, string>) {
    this.axiosInstance = axios.create({
      baseURL,
      headers,
    });
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T | any> {
    return this.axiosInstance.get<T>(url, config);
  }

  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T | any> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public async update<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T | any> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T | any> {
    return this.axiosInstance.delete<T>(url, config);
  }

  public setHeader(key: string, value: string) {
    this.axiosInstance.defaults.headers.common[key] = value;
  }

  public removeHeader(key: string) {
    delete this.axiosInstance.defaults.headers.common[key];
  }
}
