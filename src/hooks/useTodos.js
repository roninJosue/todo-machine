import { useContext } from 'react';
import { TodoContext } from 'context/context';

const useTodos = () => {
  const ctx = useContext(TodoContext);

  return ctx;
};

export default useTodos;
