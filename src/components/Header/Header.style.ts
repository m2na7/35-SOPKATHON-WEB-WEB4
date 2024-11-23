import { css, Theme } from '@emotion/react';

export const headerContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  padding: 0.4rem 0;

  border-bottom: 1px solid ${theme.color.gray800};
  background-color: ${theme.color.black};

  section {
    &:nth-of-type(1) {
      display: flex;
      justify-content: flex-start;
      width: 33.3%;
    }
    &:nth-of-type(2) {
      display: flex;
      justify-content: center;
      width: 33.3%;
    }
    &:nth-of-type(3) {
      display: flex;
      justify-content: flex-end;
      width: 33.3%;
    }
  }
`;
