import { css, Theme } from '@emotion/react';

export const cardWrapper = (randomImage: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 16rem;
  padding: 3.4rem 6.2rem;
  background-image: ${randomImage};
  background-size: cover;
  background-position: center;
`;

export const contentStyle = (theme: Theme) => css`
  ${theme.font.body1_m_16};
  color: ${theme.color.white};

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
  background: none;

  ${theme.font.subtitle6_b_14}
  color: ${theme.color.lime};
  cursor: pointer;
`;
