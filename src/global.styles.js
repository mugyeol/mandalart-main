import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  :root {
    --gray: #cacaca;
    --white: #ffffff;
    --black: #000000;
    --orange: #ff9922;
    --yellow: #ffcf26;
    --baemint: #42ffef;
    --white-rgb: 0, 0, 0;
    --purple: #5e53ff;
    --red: #ff5353;
    --red-opacity: #ff5353c8;
    --red-opacity-big: #ff53537a;
    --box-background: #ffffff2e;
    --placeholder: #656565;
    --background: hsla(0, 0%, 40%, 0.56863);
  }
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: var(--yellow);
    font-size: 3.5rem;
    margin: 4rem auto 4rem auto
  }
  h2 {
    color: var(--purple);
    font-size: 2.5rem;
    margin: 3rem auto 3rem auto
  }
  button {
    font-size: 1rem;
		border: none;
		background: none;
		cursor: text;
	}
  
`;
export default GlobalStyle;
