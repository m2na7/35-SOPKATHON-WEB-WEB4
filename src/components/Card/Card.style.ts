import { css, Theme } from '@emotion/react';

export const cardWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding: 3.4rem 0;
  background-color: ${theme.color.gray200};
`;

export const contentStyle = (theme: Theme) => css`
  ${theme.font.body1_m_16};
  color: ${theme.color.black};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const moreButton = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 1rem;

  ${theme.font.subtitle6_b_14}
  color: ${theme.color.black};
  cursor: pointer;
`;
