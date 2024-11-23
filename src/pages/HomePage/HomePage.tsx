import Card from '@components/Card/Card';
import RankingSection from '@components/RankingSection/RankingSection';
import Emoticon from '@components/Emoticon/Emoticon';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { Key, useEffect, useState } from 'react';
import { gallerySection, h1TextStyle, rankingSection } from './HomePage.style';
import { getAllFails } from '@/apis/getFails';

const rankingData = [
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 0,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 12,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 44,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 32,
  },
  {
    text: '두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~두줄만 입력 가능하게~~~',
    count: 3,
  },
];

const HomePage = () => {
  const [failsInfos, setFailsInfos] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFails = async () => {
      try {
        const data = await getAllFails();
        setFailsInfos(data.failInfos); 
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message); 
        }
      } finally {
        setIsLoading(false); 
      }
    };

    fetchFails();
  }, []);

  return (
    <div>
      <Header isGoBack={false} />
      <section css={rankingSection}>
        <RankingSection rankingData={rankingData} />
      </section>
      <h1 css={h1TextStyle}>
        <span>OOPSIE!</span> 갤러리
      </h1>
      {failsInfos.map(
        (fail: {
          failId: Key | null | undefined;
          content: string;
          goodCount: number;
          drinkCount: number;
          pellikeonCount: number;
          talentCount: number;
        }) => (
          <div key={fail.failId} css={gallerySection}>
            <Card failId={fail.failId as number} content={fail.content} />
            <Emoticon
              goodCount={fail.goodCount}
              drinkCount={fail.drinkCount}
              pellikeonCount={fail.pellikeonCount}
              talentCount={fail.talentCount}
            />
          </div>
        )
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
