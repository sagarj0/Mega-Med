import axios from 'axios';
import useSWR from 'swr';
import { backUrl } from '@/datas/variable';

axios.defaults.baseURL = backUrl;

class RequestHelper {
  static fetcher = async <T>(url: string): Promise<T> => {
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while fetching data';
      throw new Error(errorMessage);
    }
  };

  static get = (url: string, params?: any) => axios.get(url, { params });
  static post = (url: string, data: any) => axios.post(url, data);
  static put = (url: string, data: any) => axios.put(url, data);
  static patch = (url: string, data: any) => axios.patch(url, data);
  static delete = (url: string, params: any) => axios.delete(url, { params });

  static useSWR = <T>(url: string, options?: any) => {
    return useSWR<T>(url, this.fetcher, options);
  };
}

const api = RequestHelper;

export default api;
