import styled from 'styled-components';
import { device } from 'styles/utils';
import { PRIMARY } from 'constants/colors';

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: solid 1px #ddd;
  margin-bottom: 2rem;
  background-color: ${PRIMARY};
  padding: 1rem;

  @media screen and ${device.mobileL} {
    background-color: transparent;
    padding-bottom: 1rem;
  }
`;

export const StyledSearch = styled.div`
  flex: 1 33%;
  box-sizing: border-box;
`;

export const TotalTodos = styled.div`
  flex: 1 33%;
  text-align: center;
  font-weight: bold;
  color: #fff;

  @media screen and ${device.mobileL} {
    color: #000;
  }
`;
