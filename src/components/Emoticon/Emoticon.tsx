import {
  EmoticonContainer,
  EmoticonItem,
  EmoticonIcon,
  EmoticonLabel,
  EmoticonCount,
} from './Emoticon.style';
import { ImgBeer24, ImgGood24, ImgPelican24, ImgTalented24 } from '@assets/svg';

interface EmoticonProps {
  goodCount: number;
  drinkCount: number;
  pellikeonCount: number;
  talentCount: number;
}

const Emoticon = ({ goodCount, drinkCount, pellikeonCount, talentCount }: EmoticonProps) => {
  const emoticons = [
    { id: 1, label: '오히려 좋아', icon: <ImgGood24 />, count: goodCount },
    { id: 2, label: '한잔해', icon: <ImgBeer24 />, count: drinkCount },
    { id: 3, label: '펠리컨적 사고해', icon: <ImgPelican24 />, count: pellikeonCount },
    { id: 4, label: '너 재능있어', icon: <ImgTalented24 />, count: talentCount },
  ];

  return (
    <div css={EmoticonContainer}>
      {emoticons.map((emoticon) => (
        <div css={EmoticonItem} key={emoticon.id}>
          <div css={EmoticonIcon}>{emoticon.icon}</div>
          <span css={EmoticonLabel}>{emoticon.label}</span>
          <span css={EmoticonCount}>{emoticon.count.toString().padStart(2, '0')}</span>
        </div>
      ))}
    </div>
  );
};

export default Emoticon;
