import routhPath from '@routes/routhPath';
import {
  activeFooterIconStyle,
  activeFooterTextStyle,
  footerBtnWrapper,
  footerContainer,
  footerIconStyle,
} from './Footer.style';
import { IcAddnoteInactive, IcHomeInactive, IcMyInactive } from '@assets/svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div css={footerContainer}>
      <section
        css={[footerBtnWrapper, location.pathname === routhPath.HOME && activeFooterTextStyle]}
        onClick={() => navigate(routhPath.HOME)}
      >
        <IcHomeInactive
          css={[footerIconStyle, location.pathname === routhPath.HOME && activeFooterIconStyle]}
        />
        <span>홈</span>
      </section>
      <section
        css={[footerBtnWrapper, location.pathname === routhPath.POST && activeFooterTextStyle]}
        onClick={() => navigate(routhPath.POST)}
      >
        <IcAddnoteInactive
          css={[footerIconStyle, location.pathname === routhPath.POST && activeFooterIconStyle]}
        />
        <span>게시글 추가</span>
      </section>
      <section
        css={[footerBtnWrapper, location.pathname === routhPath.MYPAGE && activeFooterTextStyle]}
        onClick={() => navigate(routhPath.MYPAGE)}
      >
        <IcMyInactive
          css={[footerIconStyle, location.pathname === routhPath.MYPAGE && activeFooterIconStyle]}
        />
        <span>마이</span>
      </section>
    </div>
  );
};

export default Footer;
