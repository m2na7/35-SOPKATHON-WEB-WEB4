import { DetailCardProps } from '@type/detailFailType';
import { detailAuthor, detailDescription, detailCardWrapper } from './DetailCard.style';

const DetailCard = ({ content, writerName }: DetailCardProps) => {
  return (
    <div css={detailCardWrapper}>
      <p css={detailDescription}>{content}</p>
      <p css={detailAuthor}>{writerName}</p>
    </div>
  );
};

export default DetailCard;
