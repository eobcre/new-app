import { useState } from 'react';
import Header from '../components/Header';
import HeroImage from '../assets/hero_image.jpg';
import HeroModal from '../components/modal/HeroModal';

const HeroSection = () => {
  const [openHeroModal, setOpenHeroModal] = useState(false);

  const onClickHeroModal = () => {
    setOpenHeroModal(true);
  };

  return (
    <div>
      <div className='flex'>
        <Header onClickHeroModal={onClickHeroModal} />
        <img src={HeroImage} alt='Image' className='object-cover w-full h-screen' />
      </div>
      {openHeroModal && <HeroModal />}
    </div>
  );
};

export default HeroSection;
