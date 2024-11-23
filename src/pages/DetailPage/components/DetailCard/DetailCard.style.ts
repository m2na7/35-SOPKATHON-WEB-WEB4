import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

const detailCardWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 37.5rem;
  padding: 8rem 2rem;
  background-color: ${theme.color.gray900};
  margin-top: 4rem;
`;

const detailDescription = (theme: Theme) => css`
  text-align: center;
  ${theme.font.body2_m_14};
  color: ${theme.color.white};
`;

const detailAuthor = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  padding: 0.2rem 1rem;
  border-radius: 50px;
  ${theme.font.body6_m_10};
  background-color: ${theme.color.white};
  align-self: center;
`;

export { detailCardWrapper, detailDescription, detailAuthor };
