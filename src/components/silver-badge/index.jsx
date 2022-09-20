import React, { useState } from 'react';
import silverBadge from '../../assets/img/mint/whitelist-badge/silver-badge.png';
import BronzeBadge from '../bronze-badge';
import GoldBadge from '../gold-badge';
import GamingBadges from '../gaming-badges';
import './style.scss';

const SilverBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'silver' });
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeInLeft');
  const [imageFadeOut, setImageFadeOut] = useState('animate__fadeIn');

  const handleChange = name => {
    setTimeout(() => {
      setIsActive({ name });
    }, 300);
    setClassFadeOut('animate__fadeOut');
    setImageFadeOut('animate__fadeOut');
  };

  return (
    <>
      {isActive.name === 'silver' && (
        <div className={`container-hero height-hero-silver`}>
          <div className="content-wrapper my-4">
            <div
              className={`column-left-silver animate__animated ${classFadeOut}`}>
              <h1 className="font-hero-silver">
                SILVER <br /> BADGE
              </h1>
              <p className="subtext-1-silver">
                Higher chance at investment slots on upcoming IGOs.
              </p>
              <p className="subtext-2-silver">
                100.000 $ranker
                <br />
                <span>(UNLIMITED SUPPLY)</span>
              </p>
              <button className="button-silver">MINT YOURS NOW</button>
              <div className="badges-silver d-flex align-items-center justify-content-between">
                <h3>BRONZE BADGE</h3>
                <span className="plus" onClick={() => handleChange('bronze')}>
                  +
                </span>
              </div>
              <div className="badges-silver d-flex align-items-center justify-content-between">
                <h3>GOLD BADGE</h3>
                <span className="plus" onClick={() => handleChange('gold')}>
                  +
                </span>
              </div>
              <div className="badges-silver d-flex align-items-center justify-content-between">
                <h3>GAMING BADGES</h3>
                <span className="plus" onClick={() => handleChange('gaming')}>
                  +
                </span>
              </div>
            </div>
            <div
              className={`column-right-silver animate__animated ${imageFadeOut}`}>
              <img
                src={silverBadge}
                className="img-fluid silver-badge-shield-img"
                alt="hero illustration"
              />
              <p className="text-silver">silver investment badge</p>
            </div>
          </div>
        </div>
      )}
      {isActive.name === 'bronze' && <BronzeBadge />}
      {isActive.name === 'gold' && <GoldBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  );
};

export default SilverBadge;
