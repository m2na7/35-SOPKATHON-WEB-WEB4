import { useNavigate } from 'react-router-dom';
import { cardWrapper, contentStyle, moreButton } from './Card.style';
import routhPath from '@routes/routhPath';

interface CardProps {
  failId: number;
  content: string;
}

function Card({ failId, content }: CardProps) {
  const navigate = useNavigate();

  return (
    <div css={cardWrapper}>
      <p css={contentStyle}>{content}</p>
      <button css={moreButton} onClick={() => navigate(routhPath.DETAIL.replace(':failId', String(failId)))}>
        더보기
      </button>
    </div>
  );
}

export default Card;
