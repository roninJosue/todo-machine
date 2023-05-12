import { TodoHeader } from 'components/todo-header/todo-header';
import { TotalTodos } from 'components/todo-header/todo-header.styles';
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
});
