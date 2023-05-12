import { createContext, useCallback, useMemo, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const addTodo = useCallback((todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const removeTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const filteredTodos = useCallback(
    () =>
      todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue, todos]
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos]
  );

  const todoValue = useMemo(
    () => ({
      todos: searchValue.length > 0 ? filteredTodos() : todos,
      totalTodos: todos.length,
      completedTodos: todos.filter((todo) => todo.isCompleted).length,
      toggleTodo,
      addTodo,
      removeTodo,
      searchValue,
      setSearchValue,
    }),
    [todos, addTodo, removeTodo, searchValue, filteredTodos, toggleTodo]
  );

  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
};
