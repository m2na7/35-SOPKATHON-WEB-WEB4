import {
  IcFailking1,
  IcFailking2,
  IcFailking3,
  IcFailking4,
  IcFailking5,
  IcFire,
} from '@assets/svg';
import {
  cardContainer,
  emojiCountStyle,
  emojiIcon,
  rankNumberStyle,
  rankTextStyle,
} from './Ranking.style';
import { RankingCardType } from '@type/rankingCardType';

interface RankingCardProps extends RankingCardType {
  rank: number;
}

const getIconByRank = (rank: number) => {
  switch (rank) {
    case 1:
      return <IcFailking1 css={rankNumberStyle} />;
    case 2:
      return <IcFailking2 css={rankNumberStyle} />;
    case 3:
      return <IcFailking3 css={rankNumberStyle} />;
    case 4:
      return <IcFailking4 css={rankNumberStyle} />;
    case 5:
      return <IcFailking5 css={rankNumberStyle} />;
    default:
      return null;
  }
};

const RankingCard = ({ rank, text, count }: RankingCardProps) => {
  const formattedCount = count.toString().padStart(2, '0');
  const RankIcon = getIconByRank(rank + 1);
  return (
    <article css={cardContainer}>
      {RankIcon}
      <p css={rankTextStyle}>{text}</p>
      <div css={emojiCountStyle}>
        <IcFire css={emojiIcon} />
        <div>{formattedCount}</div>
      </div>
    </article>
  );
};

export default RankingCard;
