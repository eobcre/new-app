import { useState } from 'react';
import Header from '../components/Header';
import HeroImage from '../assets/hero_image.jpg';
import SubImage from '../assets/sub_image.jpg';
import HeroModal from '../components/modal/HeroModal';

const HeroSection = () => {
  const [openHeroModal, setOpenHeroModal] = useState(false);

  return (
    <div>
      <div className='flex'>
        <Header onOpen={() => setOpenHeroModal(true)} />
        <div className='relative w-full'>
          <img src={HeroImage} alt='HeroImage' className={`absolute inset-0 object-cover w-full h-screen transition-opacity duration-700 ${openHeroModal ? 'opacity-0' : 'opacity-100'}`} />
          <img src={SubImage} alt='SubImage' className={`absolute inset-0 object-cover w-full h-[50vh] transition-opacity duration-700 ${openHeroModal ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
      <HeroModal isOpen={openHeroModal} onClose={() => setOpenHeroModal(false)} />
    </div>
  );
};

export default HeroSection;
