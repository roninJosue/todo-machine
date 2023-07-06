import { TodoList } from 'components/todo-list';
import { TodoHeader } from 'components/todo-header';
import { TodoContainer } from 'App.styles';
import { H1 } from 'components/ui/HeadingStyled';
import TodoAddButton from 'components/todo-add-button/todo-add-button';
import { useContext, useState } from 'react';
import Modal from 'components/ui/modal/modal';
import { TodoForm } from 'components/todo-form';
import { TodoContext } from 'context/context';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { addTodo } = useContext(TodoContext);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = ({ todo }) => {
    addTodo({
      id: uuidv4(),
      text: todo,
      isCompleted: false,
    });
    toggleModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <TodoForm onSubmit={onSubmit} onCancel={toggleModal} />
      </Modal>
      <H1>My Todos</H1>
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoAddButton onClick={toggleModal} />
      </TodoContainer>
    </>
  );
}

export default App;
