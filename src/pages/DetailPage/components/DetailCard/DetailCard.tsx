import { DetailCardProps } from '@type/detailFailType';
import { detailAuthor, detailDescription, detailCardWrapper } from './DetailCard.style';
import { useMemo } from 'react';

const backgroundImages = [
  'url(/svg/ic_failnote_1_375.svg)',
  'url(/svg/ic_failnote_2_375.svg)',
  'url(/svg/ic_failnote_3_375.svg)',
];

const DetailCard = ({ content, writerName }: DetailCardProps) => {
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  }, []);
  return (
    <div css={detailCardWrapper(randomImage)}>
      <p css={detailDescription}>{content}</p>
      <p css={detailAuthor}>{writerName}</p>
    </div>
  );
};

export default DetailCard;
