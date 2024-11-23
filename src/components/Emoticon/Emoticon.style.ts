import { css, Theme } from '@emotion/react';

export const EmoticonContainer = (theme: Theme) => css`
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  scrollbar-width: none;

  padding: 0.9rem 2rem;
  background-color: ${theme.color.gray900};

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmoticonItem = (theme: Theme, isSelected: boolean) => css`
  display: flex;
  align-items: center;
  background-color: ${theme.color.gray900};
  border: 1px solid ${isSelected ? theme.color.lime : theme.color.gray700}; // 선택된 경우 lime 색상
  border-radius: 4px;
  padding: 0.4rem 1rem;
  ${theme.font.body4_m_12};
  color: ${theme.color.white};
  cursor: pointer;
`;

export const EmoticonIcon = css`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;
`;

export const EmoticonLabel = (theme: Theme) => css`
  ${theme.font.body4_m_12};
  white-space: nowrap;
  color: ${theme.color.white};
  margin-right: 0.4rem;
`;

export const EmoticonCount = (theme: Theme) => css`
  ${theme.font.body6_m_10};
  color: ${theme.color.lime};
`;
