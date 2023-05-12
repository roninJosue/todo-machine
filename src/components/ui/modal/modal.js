import ReactDOM from 'react-dom';
import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from 'components/ui/modal/modal.styles';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal');

  return isOpen
    ? ReactDOM.createPortal(
        <ModalContainer>
          <ModalOverlay onClick={onClose} />
          <ModalContent>{children}</ModalContent>
        </ModalContainer>,
        modalRoot
      )
    : null;
};

export default Modal;
