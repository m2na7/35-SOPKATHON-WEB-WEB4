import Emoticon from '@components/Emoticon/Emoticon';
import DetailCard from './components/DetailCard/DetailCard';
import { DETAIL_FAIL_DATA } from '@utils/mocks/detailFailData';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const DetailPage = () => {
  const cardData = DETAIL_FAIL_DATA.data;

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
