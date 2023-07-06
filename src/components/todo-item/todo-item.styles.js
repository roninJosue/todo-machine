import { INCOMPLETE, PRIMARY, SECONDARY } from 'constants/colors';
import styled, { css } from 'styled-components';

const lighten = (value) => css`
  filter: brightness(${value + 1});
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ddd;
  padding: 0.5rem;
  // margin-bottom: 0.9rem;
  /*&:hover {
    background-color: ${PRIMARY};
    ${lighten(1.5)}
  }*/
`;

export const ItemText = styled.span`
  font-weight: bold;
  text-align: left;
  width: calc(100% - 60px);
  margin-left: 0.5rem;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const ItemButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 24px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  & svg {
    margin-left: -3px;
  }
`;

export const ItemButtonCompleted = styled(ItemButton)`
  background-color: ${({ completed }) => (completed ? SECONDARY : INCOMPLETE)};
  color: #fff;
`;
