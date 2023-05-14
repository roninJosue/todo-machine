import { TodoForm } from 'components/todo-form/todo-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('Todo Form', () => {
  it('should render the form', () => {
    const { getByRole } = render(<TodoForm />);

    expect(getByRole('textbox')).toBeInTheDocument();

    const cancelButton = getByRole('button', { name: /Cancel/ });
    expect(cancelButton).toBeInTheDocument();

    const addButton = getByRole('button', { name: /Add/ });
    expect(addButton).toBeInTheDocument();
  });

  it('should call onSubmit function', async () => {
    const mockAdd = jest.fn();
    const { user } = setup(<TodoForm onSubmit={mockAdd} />);
    await user.type(screen.getByRole('textbox'), 'My first todo');
    await user.click(screen.getByRole('button', { name: /Add/ }));

    expect(mockAdd).toBeCalled();
  });
});
