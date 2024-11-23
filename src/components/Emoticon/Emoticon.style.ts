import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const EmoticonContainer = css`
  display: flex;
  gap: 0.9rem 0.8rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0.8rem 2rem;
  background-color: ${theme.color.gray800};
`;

export const EmoticonItem = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${theme.color.gray900};
  border: 1px solid ${theme.color.gray400};
  border-radius: 0.25rem;
  padding: 0.4rem 1rem;
  ${theme.font.body4_m_12}
  ${theme.color.white}
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.color.gray700};
  }

  span {
    color: ${theme.color.white};
  }
`;

export const EmoticonLabel = css`
  ${theme.font.body4_m_12};
  white-space: nowrap;
  color: ${theme.color.white};
  margin-left: -0.8rem;
`;

export const EmoticonCount = css`
  ${theme.font.body4_m_12};
  margin-left: -0.5rem;
  color: ${theme.color.green};
`;

export const EmoticonIcon = css`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;
