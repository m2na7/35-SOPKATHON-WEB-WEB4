export const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const END_POINT = {
  GET_ALL_FAILS: '/fails',
  GET_MY_FAIL: '/fails/my',
  POST_EMOJI: (failId: number) => `/emoji/${failId}?emojiType=DRINK`,
  DELETE_EMOJI: (failId: number) => `/emoji/${failId}`,
  GET_DETAIL_FAIL: (failId: number) => `/fail/${failId}/detail`,
  GET_RANK: '/fails/rank',
  POST_FAIL: '/fail',
} as const;
