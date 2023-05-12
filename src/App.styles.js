import styled from 'styled-components';
import { device } from 'styles/utils';

export const TodoContainer = styled.main`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  position: relative;

  @media screen and ${device.mobileL} {
    width: 40%;
    height: 50vh;
  }
`;
