import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const titleStyle = (theme:Theme) => css`
  height: 6rem;
  color: ${theme.color.white};
  ${theme.font.subtitle1_b_20};
  text-align: center;
  align-content: center;

  span {
    color: ${theme.color.lime};
  }
`;

export const failRecordsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-bottom: 7rem;
`;

export const failCardWrapper = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const badge = css`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;