import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
  background-color: ${p => p.theme.bg};
  font-size: ${p => p.theme.fz};
  font-family: 'Poppins', sans-serif;
}
body{
  margin:0;
}
.shorturl__main{
  display:grid;
  grid-template:  1fr /  1fr;
  place-items:center ;
}
.shorturl__wrapper{
  margin:0 1.5rem;
}
@media ${p => p.theme.breakPointsDevice.desktop} {
  .shorturl__wrapper{
    margin:0 5rem;
  }
}
@media ${p => p.theme.breakPointsDevice.desktopL} {
  .shorturl__wrapper{
    margin:0 10rem;
  }
}
@media ${p => p.theme.breakPointsDevice.large} {
  .shorturl__wrapper {
    inline-size: 54rem;
  }
}

`
