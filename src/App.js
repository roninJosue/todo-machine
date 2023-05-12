import { TodoProvider } from 'context/context';
import { TodoList } from 'components/todo-list';
import { TodoHeader } from 'components/todo-header';
import { TodoContainer } from 'App.styles';
import { H1 } from 'components/ui/HeadingStyled';
import TodoAddButton from 'components/todo-add-button/todo-add-button';
import { useState } from 'react';
import Modal from 'components/ui/modal/modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TodoProvider>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div>Test</div>
      </Modal>
      <H1>My Todos</H1>
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoAddButton onClick={toggleModal} />
      </TodoContainer>
    </TodoProvider>
  );
}

export default App;
