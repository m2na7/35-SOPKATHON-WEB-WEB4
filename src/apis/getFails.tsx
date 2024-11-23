import { END_POINT } from '@utils/constants/api';
import { client } from './client';

export const getAllFails = async () => {
  try {
    const response = await client.get(END_POINT.GET_ALL_FAILS);
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getMyFails = async () => {
  try {
    const response = await client.get(END_POINT.GET_MY_FAIL);
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getDetailFail = async (failId: number) => {
  try {
    const response = await client.get(END_POINT.GET_DETAIL_FAIL(failId));
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getFailsRank = async () => {
  try {
    const response = await client.get(END_POINT.GET_RANK);
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const postFail = async (data: { content: string; backgroundType: string }) => {
  try {
    const response = await client.post(END_POINT.POST_FAIL, data);
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
