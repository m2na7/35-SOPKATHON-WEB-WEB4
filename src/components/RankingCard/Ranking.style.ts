import { css, Theme } from '@emotion/react';

export const cardContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 24.7rem;
  height: 12rem;
  padding: 1.2rem;
  border: 1px solid ${theme.color.gray800};
  border-radius: 8px;
  background-color: ${theme.color.gray900};
`;

export const rankNumberStyle = css`
  width: 1.2rem;
  height: 1.2rem;
`;

export const rankTextStyle = (theme: Theme) => css`
  ${theme.font.body2_m_14};
  color: ${theme.color.white};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  min-height: 4.4rem;
  margin-top: 0.4rem;
`;

export const emojiCountStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  border: 1px solid ${theme.color.gray700};

  margin-top: 1.2rem;

  div {
    color: ${theme.color.lime};
    ${theme.font.body6_m_10};
  }
`;

export const emojiIcon = css`
  width: 1.6rem;
  height: 1.6rem;
`;
