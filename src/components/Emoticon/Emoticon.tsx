import {
  EmoticonContainer,
  EmoticonItem,
  EmoticonIcon,
  EmoticonLabel,
  EmoticonCount,
} from './Emoticon.style';
import { ImgBeer24, ImgGood24, ImgPelican24, ImgTalented24 } from '@assets/svg';
import { deleteEmoji, postEmoji } from '@/apis/getEmoji';
import { EmojiType } from '@type/emojiType';
import { useState } from 'react';
import theme from '@styles/theme';

interface EmoticonProps {
  goodCount: number;
  drinkCount: number;
  pellikeonCount: number;
  talentCount: number;
  failId: number;
  clickedEmoji: EmojiType;
}

const Emoticon = ({
  goodCount,
  drinkCount,
  pellikeonCount,
  talentCount,
  failId,
  clickedEmoji,
}: EmoticonProps) => {
  const [counts, setCounts] = useState<Record<EmojiType, number>>({
    [EmojiType.GOOD]: goodCount,
    [EmojiType.DRINK]: drinkCount,
    [EmojiType.PELLIKEON]: pellikeonCount,
    [EmojiType.TALENT]: talentCount,
    [EmojiType.NOTHING]: 0,
  });

  const [currentEmoji, setCurrentEmoji] = useState<EmojiType>(clickedEmoji);

  const handleEmojiClick = async (emojiType: EmojiType) => {
    try {
      if (currentEmoji === emojiType) {
        await deleteEmoji(failId);
        setCurrentEmoji(EmojiType.NOTHING);
        setCounts((prevCounts) => ({
          ...prevCounts,
          [emojiType]: prevCounts[emojiType] - 1,
        }));
      } else {
        await postEmoji(failId, emojiType);
        setCurrentEmoji(emojiType);
        setCounts((prevCounts) => ({
          ...prevCounts,
          [emojiType]: prevCounts[emojiType] + 1,
          [currentEmoji]: prevCounts[currentEmoji] - 1,
        }));
      }
    } catch (error) {
      console.error(
        currentEmoji === emojiType
          ? `이모티콘 삭제 실패: ${emojiType}`
          : `이모티콘 등록 실패: ${emojiType}`,
        error
      );
    }
  };

  const emoticons = [
    { id: 1, label: '오히려 좋아', icon: <ImgGood24 />, type: EmojiType.GOOD },
    { id: 2, label: '한잔해', icon: <ImgBeer24 />, type: EmojiType.DRINK },
    { id: 3, label: '펠리컨적 사고해', icon: <ImgPelican24 />, type: EmojiType.PELLIKEON },
    { id: 4, label: '너 재능있어', icon: <ImgTalented24 />, type: EmojiType.TALENT },
  ];

  return (
    <div css={EmoticonContainer}>
      {emoticons.map((emoticon) => (
        <button
          css={EmoticonItem(theme, currentEmoji === emoticon.type)}
          key={emoticon.id}
          onClick={() => handleEmojiClick(emoticon.type)}
        >
          <div css={EmoticonIcon}>{emoticon.icon}</div>
          <span css={EmoticonLabel}>{emoticon.label}</span>
          <span css={EmoticonCount}>{counts[emoticon.type].toString().padStart(2, '0')}</span>
        </button>
      ))}
    </div>
  );
};

export default Emoticon;
