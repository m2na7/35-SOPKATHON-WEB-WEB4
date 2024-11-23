import { css, Theme } from '@emotion/react';

export const sectionContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;
  overflow: auto;

  h1 {
    color: ${theme.color.white};
    ${theme.font.subtitle5_b_16};
  }
`;

export const rankingWrapper = css`
  display: flex;
  gap: 1.6rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
