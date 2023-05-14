import styled from 'styled-components';
import { theme } from 'styles/utils';

export const Button = styled.button`
  font-size: 14px;
  cursor: pointer;
  padding: 0.6em 1.2em;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  // margin-right: auto;
  min-width: 140px;
  background-color: ${({ variant }) => theme.button[variant].backgroundColor};
  color: ${({ variant }) => theme.button[variant].color};
`;
