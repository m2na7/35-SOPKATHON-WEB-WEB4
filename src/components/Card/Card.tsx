import { cardWrapper, contentStyle, moreButton } from './Card.style';

interface CardProps {
  content: string;
}

function Card({ content }: CardProps) {
  return (
    <div css={cardWrapper}>
      <p css={contentStyle}>{content}</p>
      <button css={moreButton} onClick={() => {}}>
        더보기
      </button>
    </div>
  );
}

export default Card;
