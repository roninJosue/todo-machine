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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    @media screen and ${device.mobileL} {
      display: flex;
    }
  }

`;

export const flex = css`
  display: flex;
  flex-direction: column;
`;
