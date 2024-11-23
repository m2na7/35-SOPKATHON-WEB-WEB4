import Modal from '@components/Modal/Modal';
import {
  modalContentWrapper,
  modalTitle,
  modalImage,
  modalDescription,
} from './CompleteModal.style';

interface CompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompleteModal = ({ isOpen, onClose }: CompleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 css={modalTitle}>modal</h2>

        <div css={modalContentWrapper}>
          <div css={modalImage} />
          <p css={modalDescription}> 게시글이 성공적으로{'\n'}업로드되었습니다.</p>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteModal;
