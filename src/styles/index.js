import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { device } from 'styles/utils';
import { PRIMARY } from 'constants/colors';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html{
    font-size: 85%;
    font-family: 'Nunito', sans-serif;
    background-color: #fff;
    
    @media screen and ${device.mobileL} {
      font-size: 100%;
      background-color: ${PRIMARY};
    }
  }
  
  #root{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

`;

export const flex = css`
  display: flex;
  flex-direction: column;
`;
