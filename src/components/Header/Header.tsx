import { useNavigate } from 'react-router-dom';
import { backIcon, headerContainer } from './Header.style';
import { IcArrowLeft, IcLogo } from '@assets/svg';

interface HeaderProps {
  isGoBack: boolean;
}

const Header = ({ isGoBack }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header css={headerContainer}>
      <section>
        {isGoBack && (
          <button onClick={handleBackClick}>
            <IcArrowLeft css={backIcon} />
          </button>
        )}
      </section>
      <section>
        <IcLogo />
      </section>
      <section></section>
    </header>
  );
};

export default Header;
