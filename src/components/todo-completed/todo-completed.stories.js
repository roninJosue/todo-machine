import {TodoCompleted} from 'components/todo-completed/todo-completed';
import { INCOMPLETE, SECONDARY } from 'constants/colors';

export default {
  title: 'TODOS/Completed',
  component: TodoCompleted,
  tags: ['autodocs'],
  argTypes:{
  }
}

const totalTodos = 10;
const completedTodos = 5;
const percentage = (completedTodos / totalTodos) * 100

export const Example = {
  args: {
    data: [{name:'completed', value:10, color:SECONDARY}, {name:'uncompleted', value:5, color:INCOMPLETE}],
    percentageCompleted: percentage
  }
}
