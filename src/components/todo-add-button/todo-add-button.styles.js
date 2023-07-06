import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const TodoAddButtonStyled = styled.button`
  color: ${PRIMARY};
  font-size: 3rem;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  width: 48px;
  height: 48px;

  &:hover {
    transform: rotate(180deg);
  }
`;
