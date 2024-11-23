import { css, Theme } from '@emotion/react';

const modalContainer = css`
  width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const modalFirstDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0.8rem;
`;

const divideLine = (theme: Theme) => css`
  width: 99%;
  height: 1px;
  background-color: ${theme.color.gray800};
`;

const modalTitle = (theme: Theme) => css`
  ${theme.font.subtitle5_b_16}
  color: ${theme.color.white};
  text-align: center;
`;

const modalContentWrapper = css`
  display: grid;
  gap: 0.8rem;
  margin-top: 2rem;
  place-items: center;
`;

const modalIcon = css`
  width: 6rem;
  height: 6rem;
`;

const modalDescription = (theme: Theme) => css`
  text-align: center;
  white-space: pre-line;
  ${theme.font.body2_m_14};
  color: ${theme.color.white};
`;

export {
  modalContainer,
  modalFirstDiv,
  modalTitle,
  divideLine,
  modalContentWrapper,
  modalIcon,
  modalDescription,
};
