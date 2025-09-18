import Button from '../Button';
import MENU_ITEMS from '../../data/MenuData';
import Paint from '../../assets/bg/paint.png';
import Close from '../../assets/icons/close.svg';

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeroModal: React.FC<HeroModalProps> = ({ isOpen, onClose }) => {
  return (
    <div onClick={onClose}>
      <div className={`fixed bottom-0 bg-white w-full h-[50vh] translate-all duration-700 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Button onClick={onClose} className='cursor-pointer hover:opacity-70 m-10 w-[28px] h-[28px]'>
          <img src={Close} alt='Close' />
        </Button>
        <div className='flex justify-center pt-4 w-full h-full'>
          <ul className='flex flex-wrap gap-10'>
            {MENU_ITEMS.map((item) => (
              <li key={item.id} className='relative text-white font-main text-xl uppercase w-[200px]'>
                <img src={Paint} alt='BG' />
                <a href={item.href} className='absolute inset-0 flex items-start justify-center hover:opacity-70 pt-7'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`translate-all duration-700 ease-out ${isOpen ? 'absolute bottom-0 left-0 right-0 opacity-100 translate-y-0 h-[80px] bg-main pointer-events-none' : 'opacity-0 translate-y-4 pointer-events-none'}`}></div>
    </div>
  );
};

export default HeroModal;
