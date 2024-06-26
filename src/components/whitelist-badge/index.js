import React, { useState } from 'react';
import WhitelistBadge from '../../assets/img/mint/whitelist-badge/whitelist-badge.png';
import BronzeBadge from '../bronze-badge';
import GamingBadges from '../gaming-badges';
import GoldBadge from '../gold-badge';
import SilverBadge from '../silver-badge';
import './style.scss';

export default function WhiteListBadge() {
  const [isActive, setIsActive] = useState({ name: 'whitelist' });
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
      {isActive.name === 'whitelist' && (
        <div className={`container-hero height-hero-whitelist `}>
          <div className="content-wrapper my-4">
            <div
              className={`column-left-whitelist animate__animated ${classFadeOut}`}>
              <h1 className="font-hero-whitelist">
                WHITELIST <br /> BADGES
              </h1>
              <p className="subtext-1-whitelist">
                Our investment badge allows you to participate and get a chance
                to earn in our upcoming IGOs.
              </p>
              <p className="subtext-2-whitelist">
                Be the first to fully experience our new partner games with the
                best price using our investment badges!
              </p>
              <div className="badges-whitelist d-flex align-items-center justify-content-between">
                <h3 className="m-0 p-0">BRONZE BADGES</h3>
                <span
                  className="plus m-0 p-0"
                  onClick={() => handleChange('bronze')}>
                  +
                </span>
              </div>
              <div className="badges-whitelist d-flex align-items-center justify-content-between">
                <h3 className="m-0 p-0">SILVER BADGES</h3>
                <span
                  className="plus m-0 p-0"
                  onClick={() => handleChange('silver')}>
                  +
                </span>
              </div>
              <div className="badges-whitelist d-flex align-items-center justify-content-between">
                <h3 className="m-0 p-0">GOLD BADGES</h3>
                <span
                  className="plus m-0 p-0"
                  onClick={() => handleChange('gold')}>
                  +
                </span>
              </div>
              <div className="badges-whitelist d-flex align-items-center justify-content-between">
                <h3 className="m-0 p-0">GAMING BADGES</h3>
                <span
                  className="plus m-0 p-0"
                  onClick={() => handleChange('gaming')}>
                  +
                </span>
              </div>
            </div>
            <div
              className={`column-right-whitelist animate__animated ${imageFadeOut}`}>
              <img
                src={WhitelistBadge}
                className="img-fluid whitelist-badge-shield-img"
                alt="hero illustration"
              />
              <p className="text-whitelist">Our whitelist badges.</p>
            </div>
          </div>
        </div>
      )}
      {isActive.name === 'bronze' && <BronzeBadge />}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gold' && <GoldBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  );
}
