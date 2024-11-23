import { useState } from 'react';
import CompleteModal from './components/CompleteModal/CompleteModal';
import Header from '@components/Header/Header';
import { IcArrowLeft } from '@assets/svg';
import {
  backIcon,
  mainStyle,
  pageContainer,
  selectBackgroundContainer,
  textareaSection,
  textareaStyle,
  topSection,
  uploadButton,
} from './PostingPage.style';
import Footer from '@components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Posting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div css={pageContainer}>
        <Header isGoBack={false} />
        <main css={mainStyle}>
          <section css={topSection}>
            <IcArrowLeft css={backIcon} onClick={handleBackClick} />
            <h1>
              나의 멋진 <span>OOPSIE!</span> 기록
            </h1>
          </section>
          <section css={textareaSection}>
            <textarea css={textareaStyle} placeholder="당신의 실패경험을 적어주세요." />
          </section>
          <section css={selectBackgroundContainer}>
            <div>배경 1</div>
            <div>배경 2</div>
            <div>배경 3</div>
          </section>
          <button onClick={openModal} css={uploadButton}>
            업로드
          </button>
        </main>
        <Footer />
      </div>
      <CompleteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Posting;
