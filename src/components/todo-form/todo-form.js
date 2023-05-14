import { useForm } from 'react-hook-form';
import { Button } from 'components/ui/button/button.styles';
import {
  ErrorMessage,
  Form,
  Group,
  GroupButtons,
  Label,
  TextArea,
} from 'components/todo-form/todo-form.styles';

export const TodoForm = ({ onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <Label htmlFor="todo">TODO</Label>
        <TextArea
          {...register('todo', { required: 'Please add a TODO' })}
          name="todo"
          id="todo"
          cols="30"
          rows="5"
        />
        {errors?.todo?.message && (
          <ErrorMessage>{errors?.todo?.message}</ErrorMessage>
        )}
      </Group>
      <GroupButtons>
        <Button variant="error" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </GroupButtons>
    </Form>
  );
};
