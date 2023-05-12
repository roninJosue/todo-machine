import { renderHook } from '@testing-library/react';
import { TodoContext, TodoProvider } from 'context/context';
import { act } from 'react-dom/test-utils';
import { useContext } from 'react';

describe('Todo Context', () => {
  it('should add a todo', () => {
    const addTodoMock = jest.fn();
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: ({ children }) => (
        <TodoProvider addTodo={addTodoMock}>{children}</TodoProvider>
      ),
    });

    const todoText = 'Buy milk';

    act(() => {
      result.current.addTodo({
        id: 1,
        text: todoText,
        isCompleted: false,
      });
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe(todoText);
    /*expect(addTodoMock).toHaveBeenCalledWith({
      id: 1,
      text: todoText,
      isCompleted: false,
    });*/
  });

  it('should remove a todo', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TodoProvider,
    });

    const todo = {
      id: 1,
      text: 'Buy milk',
      isCompleted: false,
    };

    act(() => {
      result.current.addTodo(todo);
    });

    expect(result.current.todos).toHaveLength(1);

    act(() => {
      result.current.removeTodo(todo.id);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TodoProvider,
    });

    const todo = {
      id: 1,
      text: 'Buy milk',
      isCompleted: false,
    };

    act(() => {
      result.current.addTodo(todo);
    });

    expect(result.current.todos[0].isCompleted).toBe(false);

    act(() => {
      result.current.toggleTodo(todo.id);
    });

    expect(result.current.todos[0].isCompleted).toBe(true);
  });

  it('should filter todos by search value', () => {
    const { result } = renderHook(() => useContext(TodoContext), {
      wrapper: TodoProvider,
    });

    const todo1 = {
      id: 1,
      text: 'Buy milk',
      isCompleted: false,
    };
    const todo2 = {
      id: 2,
      text: 'Buy bread',
      isCompleted: false,
    };

    act(() => {
      result.current.addTodo(todo1);
      result.current.addTodo(todo2);
      result.current.setSearchValue('milk');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe(todo1.text);
  });
});
