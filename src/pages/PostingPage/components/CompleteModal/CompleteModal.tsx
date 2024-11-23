import Modal from '@components/Modal/Modal';
import {
  modalContentWrapper,
  modalTitle,
  modalDescription,
  modalContainer,
  modalFirstDiv,
  modalIcon,
  divideLine,
} from './CompleteModal.style';
import { IcSuccess } from '@assets/svg';

interface CompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompleteModal = ({ isOpen, onClose }: CompleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div css={modalContainer}>
        <div css={modalFirstDiv}>
          <h2 css={modalTitle}>업로드 완료</h2>
        </div>
        <div css={divideLine}></div>
        <div css={modalContentWrapper}>
          <IcSuccess css={modalIcon} />
          <p css={modalDescription}> 게시글이 성공적으로{'\n'}업로드되었습니다.</p>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteModal;
