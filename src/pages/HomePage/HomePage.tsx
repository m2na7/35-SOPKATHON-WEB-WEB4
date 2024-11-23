import Card from '@components/Card/Card';
import RankingSection from '@components/RankingSection/RankingSection';
import Emoticon from '@components/Emoticon/Emoticon';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { Key, useEffect, useState } from 'react';
import { gallerySection, h1TextStyle, rankingSection } from './HomePage.style';
import { getAllFails, getFailsRank } from '@/apis/getFails';
import { EmojiType } from '@type/emojiType';

interface FailInfo {
  failId: number;
  content: string;
  goodCount: number;
  drinkCount: number;
  pellikeonCount: number;
  talentCount: number;
  clickedEmoji: EmojiType;
}

interface RankingData {
  failId: number;
  content: string;
  count: number;
}

const HomePage = () => {
  const [failsInfos, setFailsInfos] = useState<FailInfo[]>([]);
  const [rankingData, setRankingData] = useState<RankingData[]>([]);

  useEffect(() => {
    const fetchFails = async () => {
      try {
        const data = await getAllFails();
        setFailsInfos(data.failInfos);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    const fetchRanking = async () => {
      try {
        const rankData = await getFailsRank();
        const formattedRankingData = rankData.failDetailInfoList.map((fail: any) => ({
          failId: fail.failId,
          content: fail.content,
          count: fail.goodCount + fail.drinkCount + fail.pellikeonCount + fail.talentCount,
        }));
        setRankingData(formattedRankingData);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    fetchFails();
    fetchRanking();
  }, []);

  console.log(rankingData);

  return (
    <div>
      <Header isGoBack={false} />
      <section css={rankingSection}>
        <RankingSection rankingData={rankingData} />
      </section>
      <h1 css={h1TextStyle}>
        <span>OOPSIE!</span> 갤러리
      </h1>
      <section css={gallerySection}>
        {failsInfos.map(
          (fail: {
            failId: Key | null | undefined;
            content: string;
            goodCount: number;
            drinkCount: number;
            pellikeonCount: number;
            talentCount: number;
            clickedEmoji: EmojiType;
          }) => (
            <div key={fail.failId}>
              <Card failId={fail.failId as number} content={fail.content} />
              <Emoticon
                failId={fail.failId as number}
                goodCount={fail.goodCount}
                drinkCount={fail.drinkCount}
                pellikeonCount={fail.pellikeonCount}
                talentCount={fail.talentCount}
                clickedEmoji={fail.clickedEmoji}
              />
            </div>
          )
        )}
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
