import axios from 'axios';

export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'An error occurred while fetching data');
  }
};
