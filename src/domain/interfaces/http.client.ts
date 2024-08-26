export interface HttpClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T>(url: string, data: any, config?: any): Promise<T>;
  update<T>(url: string, data: any, config?: any): Promise<T>;
  delete<T>(url: string, config?: any): Promise<T>;
  setHeader(key: string, value: string): void;
  removeHeader(key: string): void;
}
