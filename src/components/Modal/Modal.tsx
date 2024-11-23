import { createPortal } from 'react-dom';
import { modalBackDrop, modalContent, modalCloseButton } from './Modal.style';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleButtonClick = () => {
    onClose();
    navigate('/');
  };

  return createPortal(
    <div css={modalBackDrop} onClick={onClose}>
      <div css={modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button css={modalCloseButton} onClick={handleButtonClick}>
          확인
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') as Element
  );
};

export default Modal;
