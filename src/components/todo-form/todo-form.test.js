import { TodoForm } from 'components/todo-form/todo-form';
import { act, render, screen } from '@testing-library/react';
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

    await act(async () => {
      await user.type(screen.getByRole('textbox'), 'My first todo');
      await user.click(screen.getByRole('button', { name: /Add/ }));
      expect(mockAdd).toHaveBeenCalled();
    });
  });

  it('displays an error message when the user submits the form without entering a todo', async () => {
    const onSubmit = jest.fn();
    const onCancel = jest.fn();

    render(<TodoForm onSubmit={onSubmit} onCancel={onCancel} />);

    // Submit the form without entering a todo
    const addButton = screen.getByRole('button', { name: 'Add' });
    await act(async () => {
      await userEvent.click(addButton);
    });

    // Verify that the error message is displayed
    const errorMessage = await screen.findByText(/Please add a TODO/);
    expect(errorMessage).toHaveTextContent('Please add a TODO');

    // Verify that the onSubmit callback is not called
    expect(onSubmit).not.toHaveBeenCalled();

    // Verify that the onCancel callback is not called
    expect(onCancel).not.toHaveBeenCalled();
  });
});
