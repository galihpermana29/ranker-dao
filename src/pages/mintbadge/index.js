import { useState } from 'react';
import heroBadge from '../../assets/img/mint/hero.png';
import GamingBadges from '../../components/gaming-badges';
import WhiteListBadge from '../../components/whitelist-badge';
import './style.scss';

const MintBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'mint' })
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeIn')

  const handleChange = (name) => {
    setTimeout(() => {
      setIsActive({ name })
    }, 900)
    setClassFadeOut('animate__fadeOut')
  }

  return (
    <>
      {isActive.name === 'mint' && <div className="container-hero height-hero">
        <div className={`content-wrapper my-3 animate__animated animate__slow ${classFadeOut}`}>
          <div className="column-left">
            <h1 className='font-hero'>BE A PART <br /> OF OUR <br /> <span>FAMILY</span></h1>
            <p className='subtext-mint'>You can enjoy our inventory of NFTs and other boons with yout RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and beyond.
            </p>
            <div className='badges-mint d-flex align-items-center justify-content-between'>
              <h3>WHITELIST BADGES</h3>
              <span className='plus' onClick={() => handleChange('whitelist')}>+</span>
            </div>
            <div className='badges-mint d-flex align-items-center justify-content-between'>
              <h3>GAMING BADGES</h3>
              <span className='plus' onClick={() => handleChange('gaming')}>+</span>
            </div>
          </div>
          <div className="column-right">
            <img
              src={heroBadge}
              className="img-fluid mint-badge-shield-img"
              alt="hero illustration"
            />
            <p className='text-collections'>Our badge collections!</p>
          </div>
        </div>
      </div>}
      {isActive.name === 'whitelist' && <WhiteListBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>

  );
};

export default MintBadge;
