import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
:root {  
  --color-primary-text: #333333;
  --color-accent-dark: #fc3c17;
  --color-primary: #4b9301;

  --color-secondary: #121258;
  --color-accent-light: #fc5130;
}

html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }


  .container {
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
  .container {
    padding: 0;
    margin: 0 auto;
    width: 80%;
    max-width: 1280px;
  }
}
    .active-menu-item {
        color: var(--color-accent-dark) !important;
    }

    header {
        color: var(--color-primary-text);
    }

    .page-title {
        text-align: center;
        margin: 3em 0 2em;
    }
`;
