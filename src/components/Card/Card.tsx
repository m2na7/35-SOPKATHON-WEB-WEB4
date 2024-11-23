import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardWrapper, contentStyle, moreButton } from './Card.style';
import routhPath from '@routes/routhPath';

interface CardProps {
  failId: number;
  content: string;
}

const backgroundImages = [
  'url(/svg/ic_failnote_1_160.svg)',
  'url(/svg/ic_failnote_2_160.svg)',
  'url(/svg/ic_failnote_3_160.svg)',
];

function Card({ failId, content }: CardProps) {
  const navigate = useNavigate();
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  }, []);

  return (
    <div css={cardWrapper(randomImage)}>
      <p css={contentStyle}>{content}</p>
      <button
        css={moreButton}
        onClick={() => navigate(routhPath.DETAIL.replace(':failId', String(failId)))}
      >
        더보기
      </button>
    </div>
  );
}

export default Card;
