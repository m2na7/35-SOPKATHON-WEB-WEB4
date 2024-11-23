import Emoticon from '@components/Emoticon/Emoticon';
import DetailCard from './components/DetailCard/DetailCard';
import { DETAIL_FAIL_DATA } from '@utils/mocks/detailFailData';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailFail } from '@/apis/getFails';

interface CardData {
  content: string;
  writerName: string;
  goodCount: number;
  drinkCount: number;
  pellikeonCount: number;
  talentCount: number;
}

const DetailPage = () => {
  const { failId } = useParams();
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    const fetchDetailFail = async () => {
      if (failId) {
        const data = await getDetailFail(Number(failId));
        setCardData(data);
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
        goodCount={cardData.goodCount}
        drinkCount={cardData.drinkCount}
        pellikeonCount={cardData.pellikeonCount}
        talentCount={cardData.talentCount}
      />
      <Footer />
    </div>
  );
};

export default DetailPage;
