import { useEffect, useState } from 'react';
import Header from '@components/Header/Header';
import Card from '@components/Card/Card';
import Emoticon from '@components/Emoticon/Emoticon';
import Footer from '@components/Footer/Footer';
import { badge, failCardWrapper, failRecordsContainer, titleStyle } from './MyPage.style';
import { ImgPelican24 } from '@assets/svg';
import { getMyFails } from '@/apis/getFails';
import { data } from 'react-router-dom';

const MyPage = () => {
  const [failsInfos, setFailsInfos] = useState<any[]>([]);

  useEffect(() => {
    const fetchFails = async () => {
      try {
        const data = await getMyFails();
        setFailsInfos(data.failInfos);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    fetchFails();
  }, []);

  return (
    <div>
      <Header isGoBack={false} />
      <h2 css={titleStyle}>
        나의 <span>OOPSIE!</span> 기록
      </h2>
      <div css={failRecordsContainer}>
        {failsInfos.map((fail, index) => (
          <div key={fail.failId} css={failCardWrapper}>
            {index === 0 && <ImgPelican24 css={badge} />}
            <Card failId={fail.failId} content={fail.content} />
            <Emoticon
              failId={fail.failId}
              goodCount={fail.goodCount}
              drinkCount={fail.drinkCount}
              pellikeonCount={fail.pellikeonCount}
              talentCount={fail.talentCount}
              clickedEmoji={fail.clickedEmoji}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
