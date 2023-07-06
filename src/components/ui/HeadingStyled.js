import styled from 'styled-components';
import { device } from 'styles/utils';

export const H1 = styled.h1`
  color: #fff;
  display: none;

  @media screen and ${device.mobileL} {
    display: block;
  }
`;
