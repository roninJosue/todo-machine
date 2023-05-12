import {TodoItem} from 'components/todo-item';

export default {
  title: 'TODOS/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
  argTypes:{
  }
}
export const CompletedTodo = {
  args:{
    text: 'My Todo',
    isCompleted: true,
    deleteTodo: () => console.log('Todo deleted'),
    changeStatus: () => console.log('Change status')
  }
}

export const UnCompletedTodo = {
  args:{
    text: 'Todo not completed',
    isCompleted: false,
    deleteTodo: () => console.log('Todo deleted'),
    changeStatus: () => console.log('Change status')
  }
}
