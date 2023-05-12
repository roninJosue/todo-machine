import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-clip: padding-box;
  line-height: 1.5;
  border: 1px solid #495057;

  &:focus {
    // color: #adb5bd;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

export const FormGroup = styled.div`
  position: relative;
`;
export const InputIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
`;
