import { TodoList } from 'components/todo-list/todo-list';
import { fireEvent, render } from '@testing-library/react';
import { TodoContext } from 'context/context';

const TODOS = [
  {
    id: 1,
    text: 'Buy milk',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Learn ReactJs',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Sleep 7 hours',
    isCompleted: false,
  },
  {
    id: 4,
    text: 'Eat less',
    isCompleted: false,
  },
];
describe('Todo List', () => {
  it('should render 4 todos', () => {
    const { getByTestId } = render(
      <TodoContext.Provider
        value={{
          todos: TODOS,
        }}
      >
        <TodoList />
      </TodoContext.Provider>
    );

    const todoListElements = getByTestId('todo-list');
    expect(todoListElements.children.length).toBe(TODOS.length);
  });

  it('should toggle and remove a todo', () => {
    const toggleTodo = jest.fn();
    const removeTodo = jest.fn();
    const { getAllByRole } = render(
      <TodoContext.Provider
        value={{
          todos: TODOS,
          toggleTodo,
          removeTodo,
        }}
      >
        <TodoList />
      </TodoContext.Provider>
    );

    const todoItems = getAllByRole('listitem');
    expect(todoItems.length).toBe(TODOS.length);
    const firstTodoItem = todoItems[0];
    const buttons = getAllByRole('button', firstTodoItem);
    const firstButtonFromItem = buttons[0];
    const secondButtonFromItem = buttons[1];

    fireEvent.click(firstButtonFromItem);
    expect(toggleTodo).toHaveBeenCalledTimes(1);

    fireEvent.click(secondButtonFromItem);
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });
});
