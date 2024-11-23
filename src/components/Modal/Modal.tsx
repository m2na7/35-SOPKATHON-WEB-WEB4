import { createPortal } from 'react-dom';
import { modalBackDrop, modalContent, modalCloseButton } from './Modal.style';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div css={modalBackDrop} onClick={onClose}>
      <div css={modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button css={modalCloseButton} onClick={onClose}>
          확인
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') as Element
  );
};

export default Modal;
