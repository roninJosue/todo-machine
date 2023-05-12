import { FormGroup, InputIcon, StyledInput } from './input.styles';

export const Input = ({ onChange, value, children, type = 'text' }) => (
  <FormGroup>
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder="Search TODO"
    />
    <InputIcon>{children}</InputIcon>
  </FormGroup>
);
