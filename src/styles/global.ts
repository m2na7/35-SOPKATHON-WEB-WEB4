import { css } from '@emotion/react';
import reset from './reset';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  :root {
    --min-width: 375px;
    --max-width: 375px;
  }
  html,
  body {
    font-size: 62.5%;
    width: 100%;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }

  a {
    text-decoration: none;
  }

  input,
  button {
    border: none;
    outline: none;
  }

  #root {
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    /* min-height: 100dvh; */
    background-color: #000;
    margin: 0 auto;
  }

  @media (min-width: 375px) {
    #root {
      max-width: var(--max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default globalStyle;
