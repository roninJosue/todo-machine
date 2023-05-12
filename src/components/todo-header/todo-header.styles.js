import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: solid 1px #ddd;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const StyledSearch = styled.div`
  flex: 1 33%;
  box-sizing: border-box;
`;

export const TotalTodos = styled.div`
  flex: 1 33%;
  text-align: center;
  font-weight: bold;
`;
