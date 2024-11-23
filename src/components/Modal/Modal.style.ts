import { Theme, css } from '@emotion/react';

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

const modalContent = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem 2rem;
  width: 26rem;
  height: 25.2rem;
  border: 1px solid ${theme.color.gray600};
  background-color: ${theme.color.gray900};
  border-radius: 10px;
  z-index: 2;
`;

const modalCloseButton = (theme: Theme) => css`
  width: 100%;
  padding: 0.8rem 0;
  background-color: ${theme.color.lime};
  color: ${theme.color.black};
  ${theme.font.subtitle3_b_18};
  border-radius: 50px;
  margin-top: 1.8rem;
  cursor: pointer;
`;

export { modalBackDrop, modalContent, modalCloseButton };
