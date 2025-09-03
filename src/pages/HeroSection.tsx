import { useState } from 'react';
import Header from '../components/Header';
import HeroImage from '../assets/hero_image.jpg';
import HeroModal from '../components/modal/HeroModal';

const HeroSection = () => {
  const [openHeroModal, setOpenHeroModal] = useState(false);

  return (
    <div>
      <div className='flex'>
        <Header onOpen={() => setOpenHeroModal(true)} />
        <img src={HeroImage} alt='Image' className='object-cover w-full h-screen' />
      </div>
      <HeroModal isOpen={openHeroModal} onClose={() => setOpenHeroModal(false)} />
    </div>
  );
};

export default HeroSection;
