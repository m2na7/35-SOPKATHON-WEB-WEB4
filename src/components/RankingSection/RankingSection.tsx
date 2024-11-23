import RankingCard from '@components/RankingCard/RankingCard';
import { rankingWrapper, sectionContainer } from './RankingSection.style';
import { RankingCardType } from '@type/rankingCardType';

interface RankingSectionProps {
  rankingData: RankingCardType[];
}

const RankingSection = ({ rankingData }: RankingSectionProps) => {
  return (
    <section css={sectionContainer}>
      <h1>
        오늘의 <span>OOPSIE!</span>왕은?
      </h1>
      <div css={rankingWrapper}>
        {rankingData.map((data, index) => (
          <RankingCard key={index} rank={index} text={data.text} count={data.count} />
        ))}
      </div>
    </section>
  );
};

export default RankingSection;
