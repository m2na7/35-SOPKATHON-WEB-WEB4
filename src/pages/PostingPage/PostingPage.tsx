import { useState } from 'react';
import CompleteModal from './components/CompleteModal/CompleteModal';
import Header from '@components/Header/Header';
import {
  IcArrowLeft,
  IcBgActive1,
  IcBgActive2,
  IcBgActive3,
  IcBgInactive1,
  IcBgInactive2,
  IcBgInactive3,
} from '@assets/svg';
import {
  backIcon,
  imgSelectIcon,
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
import { postFail } from '@/apis/getFails';

const iconMappings = [
  {
    type: 'A',
    inactive: IcBgInactive1,
    active: IcBgActive1,
    bgImage: 'public/svg/ic_failnote_1_335.svg',
  },
  {
    type: 'B',
    inactive: IcBgInactive2,
    active: IcBgActive2,
    bgImage: 'public/svg/ic_failnote_2_335.svg',
  },
  {
    type: 'C',
    inactive: IcBgInactive3,
    active: IcBgActive3,
    bgImage: 'public/svg/ic_failnote_3_335.svg',
  },
];

const Posting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBg, setSelectedBg] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleBgClick = (index: number) => {
    setSelectedBg(index);
  };

  const handleUpload = async () => {
    const selectedType = iconMappings[selectedBg].type;
    const response = await postFail({
      content: textareaValue,
      backgroundType: selectedType,
    });
    console.log(response);

    openModal();
  };

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
            <textarea
              css={textareaStyle(iconMappings[selectedBg].bgImage)}
              placeholder="당신의 실패경험을 적어주세요."
              value={textareaValue}
              onChange={handleTextareaChange}
            />
          </section>
          <section css={selectBackgroundContainer}>
            {iconMappings.map((icon, index) => {
              const IconComponent = selectedBg === index ? icon.active : icon.inactive;
              return (
                <IconComponent
                  key={icon.type}
                  onClick={() => handleBgClick(index)}
                  css={imgSelectIcon}
                />
              );
            })}
          </section>
          <button onClick={handleUpload} css={uploadButton}>
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
