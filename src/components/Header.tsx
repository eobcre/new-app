import Button from './Button';
import Logo from '../assets/logo/logo.svg';
import Menu from '../assets/icons/menu.svg';

interface HeaderProps {
  onClickHeroModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClickHeroModal }) => {
  return (
    <header className='flex flex-col items-center justify-between w-28 h-screen'>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col items-center'>
          <img src={Logo} alt='Logo' width={50} height={50} className='pt-3 pb-1' />
          <p className='text-main text-lg font-main'>OIKAZE</p>
        </div>
        <div className='flex justify-center pb-8'>
          <Button onClick={onClickHeroModal} className='w-[28px] h-[28px]'>
            <img src={Menu} alt='Menu' />
          </Button>
        </div>
      </div>
      <div className='flex justify-center items-center bg-main w-28 h-28'>
        <p className='text-white font-main'>RESERVATION</p>
      </div>
    </header>
  );
};

export default Header;
