import { TodoItem } from 'components/todo-item';
import { ListContainer } from 'components/todo-list/todo-list.styles';
import { useContext } from 'react';
import { TodoContext } from 'context/context';

export const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);
  return (
    <ListContainer data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          changeStatus={() => toggleTodo(todo.id)}
          text={todo.text}
          deleteTodo={() => removeTodo(todo.id)}
          isCompleted={todo.isCompleted}
        />
      ))}
    </ListContainer>
  );
};
