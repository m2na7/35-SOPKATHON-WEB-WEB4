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
import { useNavigate } from 'react-router-dom';
import routhPath from '@routes/routhPath';

interface RankingCardProps extends RankingCardType {
  failId: number;
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

const RankingCard = ({ rank, content, count, failId }: RankingCardProps) => {
  const navigate = useNavigate();
  const formattedCount = count.toString().padStart(2, '0');
  const RankIcon = getIconByRank(rank + 1);
  return (
    <article
      css={cardContainer}
      onClick={() => navigate(routhPath.DETAIL.replace(':failId', String(failId)))}
    >
      {RankIcon}
      <p css={rankTextStyle}>{content}</p>
      <div css={emojiCountStyle}>
        <IcFire css={emojiIcon} />
        <div>{formattedCount}</div>
      </div>
    </article>
  );
};

export default RankingCard;
