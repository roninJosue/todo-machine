import { TodoHeader } from 'components/todo-header/todo-header';
import { fireEvent, render } from '@testing-library/react';
import { TodoContext } from 'context/context';

describe('Todo Header', () => {
  it('should render the header component', () => {
    const setSearchValue = jest.fn();
    const { getByRole, getByText } = render(
      <TodoContext.Provider
        value={{
          searchValue: '',
          setSearchValue,
          totalTodos: 3,
          completedTodos: 1,
        }}
      >
        <TodoHeader />
      </TodoContext.Provider>
    );

    const searchInput = getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Buy milk' } });
    expect(setSearchValue).toHaveBeenCalledWith('Buy milk');

    const totalTodosText = getByText('3 TODOs');
    expect(totalTodosText).toBeInTheDocument();

    const percentageCompletedText = getByText(/33%/i);
    expect(percentageCompletedText).toBeInTheDocument();
  });

  it('should not render the chart when there are no todos', () => {
    const setSearchValue = jest.fn();
    const { queryByText } = render(
      <TodoContext.Provider
        value={{
          searchValue: '',
          setSearchValue,
          totalTodos: 0,
          completedTodos: 0,
        }}
      >
        <TodoHeader />
      </TodoContext.Provider>
    );

    const percentageCompletedText = queryByText(/Completed/);
    expect(percentageCompletedText).toBeNull();
  });
});
