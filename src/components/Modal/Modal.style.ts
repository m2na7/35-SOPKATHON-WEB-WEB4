import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

const modalBackDrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const modalContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 26rem;
  height: 24rem;
  gap: 1rem;
  background: white;
  border-radius: 8px;
  z-index: 2;
`;

const modalCloseButton = (theme: Theme) => css`
  width: 17rem;
  height: 3rem;
  margin-bottom: 1rem;
  background-color: ${theme.color.gray200};
`;

export { modalBackDrop, modalContent, modalCloseButton };
