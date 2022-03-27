import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from './axiosInstance';
import { IStardbData } from '@src/interfaces';

interface ServerResponse {
  data: IStardbData;
  [key: string]: any;
}

const stardbRequest = createAsyncThunk(
  'stardb/stardbRequest',
  async (req: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.request<ServerResponse>({
        method: 'get',
        url: req,
      });

      if (response.status !== 200) {
        throw new Error('Ошибка загрузки новостей');
      }

      const { data } = await response;

      return data;
    } catch (e) {
      const error: string = (e as Error).message;
      return rejectWithValue(error);
    }
  },
);

export { stardbRequest };
