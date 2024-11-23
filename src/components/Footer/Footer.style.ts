import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const footerContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 0.8rem 2rem;
  width: 37.5rem;
  height: 7rem;
  background-color: ${theme.color.gray900};

  span {
    color: ${theme.color.gray600};
    ${theme.font.body4_m_12};
  }
`;

export const footerBtnWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    span {
      color: ${theme.color.white};
    }
    path {
      fill: ${theme.color.white};
    }
  }
`;

export const footerIconStyle = css`
  width: 3.2rem;
  height: 3.2rem;
`;

export const activeFooterTextStyle = (theme: Theme) => css`
  span {
    color: ${theme.color.white};
  }
`;

export const activeFooterIconStyle = (theme: Theme) => css`
  path {
    fill: ${theme.color.white};
  }
`;
