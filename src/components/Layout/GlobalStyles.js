import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  background-color: ${p => p.theme.bg};
  font-size: ${p => p.theme.fz};
  font-family: 'Poppins', sans-serif;
}
body{
  margin:1.5rem;
  margin-block-start: 3rem;
}

`
