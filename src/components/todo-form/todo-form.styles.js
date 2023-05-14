import styled from 'styled-components';
import { flex } from 'styles';
import { DANGER, PRIMARY } from 'constants/colors';

export const Group = styled.div`
  ${flex};
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  color: ${PRIMARY};
`;

export const GroupButtons = styled(Group)`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TextArea = styled.textarea`
  color: ${PRIMARY};
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.35rem;
`;

export const ErrorMessage = styled.span`
  color: ${DANGER};
  margin-top: 0.2rem;
`;
