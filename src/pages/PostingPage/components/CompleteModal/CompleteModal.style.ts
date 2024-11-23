import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

const modalTitle = (theme: Theme) => css`
  margin-bottom: 3rem;
  ${theme.font.subtitle5_b_16}
  text-align: center;
`;

const modalContentWrapper = css`
  display: grid;
  gap: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  place-items: center;
`;

const modalImage = css`
  width: 6rem;
  height: 6rem;
  background-color: #f5f5f5;
`;

const modalDescription = (theme: Theme) => css`
  text-align: center;
  white-space: pre-line;
  ${theme.font.body4_m_12}
`;

export { modalTitle, modalContentWrapper, modalImage, modalDescription };
