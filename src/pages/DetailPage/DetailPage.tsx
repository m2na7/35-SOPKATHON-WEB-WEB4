import Emoticon from '@components/Emoticon/Emoticon';
import DetailCard from './components/DetailCard/DetailCard';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailFail } from '@/apis/getFails';
import { EmojiType } from '@type/emojiType';

interface CardData {
  content: string;
  writerName: string;
  goodCount: number;
  drinkCount: number;
  pellikeonCount: number;
  talentCount: number;
  clickedEmoji: EmojiType;
}

const DetailPage = () => {
  const { failId } = useParams();
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    const fetchDetailFail = async () => {
      if (failId) {
        try {
          const data = await getDetailFail(Number(failId));
          setCardData(data);
        } catch (err) {
          console.error('Failed to fetch detail data:', err);
        }
      }
    };

    fetchDetailFail();
  }, [failId]);

  if (!cardData) {
    return <div>Loading...</div>; // 데이터가 없는 동안 로딩 화면 표시
  }

  return (
    <div>
      <Header isGoBack={true} />
      <DetailCard content={cardData.content} writerName={cardData.writerName} />
      <Emoticon
        failId={Number(failId)}
        goodCount={cardData.goodCount}
        drinkCount={cardData.drinkCount}
        pellikeonCount={cardData.pellikeonCount}
        talentCount={cardData.talentCount}
        clickedEmoji={cardData.clickedEmoji}
      />
      <Footer />
    </div>
  );
};

export default DetailPage;
