import Button from '../Button';
import Close from '../../assets/icons/close.svg';

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeroModal: React.FC<HeroModalProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      <div className={`fixed bottom-0 bg-white w-full h-[50vh] translate-all duration-700 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Button onClick={onClose} className='cursor-pointer hover:opacity-70 mt-4 ml-4 w-[28px] h-[28px]'>
          <img src={Close} alt='Close' />
        </Button>
      </div>
    </div>
  );
};

export default HeroModal;
