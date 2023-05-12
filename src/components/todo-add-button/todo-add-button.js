import { AiFillPlusCircle } from 'react-icons/ai';
import { TodoAddButtonStyled } from 'components/todo-add-button/todo-add-button.styles';

const TodoAddButton = ({ onClick }) => (
  <TodoAddButtonStyled onClick={onClick}>
    <AiFillPlusCircle />
  </TodoAddButtonStyled>
);

export default TodoAddButton;
