import {
  ItemButton,
  ItemButtonCompleted,
  ItemContainer,
  ItemText,
} from 'components/todo-item/todo-item.styles';
import { DANGER } from 'constants/colors';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi';

export const TodoItem = ({ isCompleted, text, deleteTodo, changeStatus }) => (
  <ItemContainer>
    <ItemButtonCompleted
      type="button"
      completed={isCompleted}
      onClick={changeStatus}
    >
      {isCompleted ? <HiCheck size="1.3em" /> : null}
    </ItemButtonCompleted>
    <ItemText completed={isCompleted}>{text}</ItemText>
    <ItemButton type="button" onClick={deleteTodo}>
      <FaTrashAlt color={DANGER} />
    </ItemButton>
  </ItemContainer>
);

TodoItem.propTypes = {
  /**
   * Todo status
   */
  isCompleted: PropTypes.bool.isRequired,
  /**
   * Todo description
   */
  text: PropTypes.string.isRequired,
  /**
   * Function for delete a todo
   */
  deleteTodo: PropTypes.func.isRequired,
  /**
   * Function for change status of a todo
   */
  changeStatus: PropTypes.func.isRequired,
};
