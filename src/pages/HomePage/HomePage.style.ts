import { css, Theme } from '@emotion/react';

export const rankingSection = css`
  width: 100%;
  padding: 0 2rem 0 2rem;

  margin-top: 3.8rem;
`;

export const h1TextStyle = (theme: Theme) => css`
  color: ${theme.color.white};
  ${theme.font.subtitle5_b_16};

  margin: 3.8rem 0 1.6rem 2rem;

  span {
    color: ${theme.color.lime};
  }
`;

export const gallerySection = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-bottom: 7rem;
`;
