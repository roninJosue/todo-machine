import styled from 'styled-components';
import { device } from 'styles/utils';

export const TodoContainer = styled.main`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  height: 100vh;

  @media screen and ${device.mobileL} {
    width: 40%;
    max-height: 70vh;
    min-height: 70vh;
    padding: 1rem;
  }
`;
