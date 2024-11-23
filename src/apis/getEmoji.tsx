import { END_POINT } from '@utils/constants/api';
import { client } from './client';
import { EmojiType } from '@type/emojiType';

export const deleteEmoji = async (failId: number) => {
  try {
    const response = await client.delete(END_POINT.DELETE_EMOJI(failId));
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const postEmoji = async (failId: number, emojiType: EmojiType) => {
  try {
    console.log(emojiType);
    const response = await client.post(END_POINT.POST_EMOJI(failId), null, {
      params: { emojiType },
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
